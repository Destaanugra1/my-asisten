extends Node2D

const PLAYER_SPEED := 260.0
const ENEMY_SPEED := 170.0

@onready var player: CharacterBody2D = $Player
@onready var enemy: Area2D = $Enemy
@onready var label: Label = $CanvasLayer/Label
@onready var timer: Timer = $Timer

var enemy_direction := Vector2.ONE.normalized()
var score := 0
var game_over := false

func _ready() -> void:
	randomize()
	enemy.body_entered.connect(_on_enemy_body_entered)
	timer.timeout.connect(_on_timer_timeout)
	_update_label()

func _physics_process(delta: float) -> void:
	if game_over:
		if Input.is_action_just_pressed("ui_accept"):
			get_tree().reload_current_scene()
		return

	var input_vector := Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
	player.velocity = input_vector * PLAYER_SPEED
	player.move_and_slide()
	player.global_position = player.global_position.clamp(Vector2(20, 20), Vector2(940, 520))

	enemy.global_position += enemy_direction * ENEMY_SPEED * delta
	if enemy.global_position.x < 18 or enemy.global_position.x > 942:
		enemy_direction.x *= -1
	if enemy.global_position.y < 18 or enemy.global_position.y > 522:
		enemy_direction.y *= -1

func _on_timer_timeout() -> void:
	if game_over:
		return
	score += 1
	if score % 5 == 0:
		enemy_direction = Vector2(randf_range(-1.0, 1.0), randf_range(-1.0, 1.0)).normalized()
	_update_label()

func _on_enemy_body_entered(body: Node) -> void:
	if body != player or game_over:
		return
	game_over = true
	timer.stop()
	label.text = "Kena musuh. Skor: %d | Enter buat restart" % score

func _update_label() -> void:
	label.text = "Skor: %d | Hindari musuh merah" % score
