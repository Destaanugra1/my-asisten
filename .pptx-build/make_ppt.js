const PptxGenJS = require('pptxgenjs');
const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenClaw';
pptx.company = 'OpenClaw';
pptx.subject = 'Materi AI dan Machine Learning';
pptx.title = 'AI dan Machine Learning';
pptx.lang = 'id-ID';
pptx.theme = {
  headFontFace: 'Aptos',
  bodyFontFace: 'Aptos',
  lang: 'id-ID'
};

const slides = [
  {
    title: 'AI dan Machine Learning',
    bullets: [
      'Materi pengantar untuk tingkat profesional',
      'Fokus pada konsep, alur kerja, use case, risiko, dan implementasi bisnis'
    ]
  },
  {
    title: 'Apa Itu Artificial Intelligence (AI)?',
    bullets: [
      'AI adalah cabang ilmu komputer yang bertujuan membuat sistem mampu melakukan tugas yang biasanya membutuhkan kecerdasan manusia.',
      'Contoh: memahami bahasa, mengenali gambar, membuat prediksi, mengambil keputusan, dan otomasi proses.'
    ]
  },
  {
    title: 'Apa Itu Machine Learning (ML)?',
    bullets: [
      'Machine Learning adalah bagian dari AI yang memungkinkan sistem belajar dari data tanpa diprogram dengan aturan yang sepenuhnya eksplisit.',
      'Model ML menemukan pola dari data historis dan menggunakannya untuk prediksi atau klasifikasi pada data baru.'
    ]
  },
  {
    title: 'Perbedaan AI, Machine Learning, dan Deep Learning',
    bullets: [
      'AI adalah payung besar teknologi kecerdasan buatan.',
      'Machine Learning adalah pendekatan AI berbasis pembelajaran dari data.',
      'Deep Learning adalah subset ML yang memakai jaringan saraf berlapis banyak serta membutuhkan data dan komputasi lebih besar.'
    ]
  },
  {
    title: 'Alur Kerja Proyek Machine Learning',
    bullets: [
      'Identifikasi masalah bisnis yang ingin diselesaikan.',
      'Kumpulkan, pahami, dan bersihkan data.',
      'Latih model, evaluasi performa, lalu lakukan deployment.',
      'Monitor model secara berkala dan lakukan perbaikan berkelanjutan.'
    ]
  },
  {
    title: 'Jenis-Jenis Machine Learning',
    bullets: [
      'Supervised Learning: belajar dari data berlabel, misalnya klasifikasi spam atau prediksi churn.',
      'Unsupervised Learning: mencari pola tanpa label, misalnya segmentasi pelanggan.',
      'Reinforcement Learning: agen belajar dari reward dan punishment, misalnya pada robotika dan game AI.'
    ]
  },
  {
    title: 'Contoh Penerapan Profesional',
    bullets: [
      'Keuangan: deteksi fraud, credit scoring, analisis risiko.',
      'Retail: rekomendasi produk, prediksi permintaan, personalisasi promosi.',
      'Kesehatan: analisis citra medis dan dukungan keputusan klinis.',
      'Operasional: predictive maintenance dan optimasi rantai pasok.'
    ]
  },
  {
    title: 'Manfaat Bisnis dari AI dan ML',
    bullets: [
      'Meningkatkan efisiensi dan kecepatan proses kerja.',
      'Meningkatkan akurasi prediksi dan kualitas keputusan.',
      'Memberikan pengalaman pelanggan yang lebih personal.',
      'Membuka peluang inovasi produk dan model bisnis baru.'
    ]
  },
  {
    title: 'Risiko dan Tantangan',
    bullets: [
      'Kualitas data yang buruk menghasilkan model yang buruk.',
      'Bias data dapat memunculkan keputusan yang tidak adil.',
      'Beberapa model sulit dijelaskan, terutama deep learning.',
      'Privasi, keamanan, kepatuhan, dan governance harus dirancang sejak awal.'
    ]
  },
  {
    title: 'Kesimpulan dan Rekomendasi',
    bullets: [
      'AI dan Machine Learning adalah alat strategis untuk menyelesaikan masalah nyata.',
      'Mulailah dari masalah bisnis yang jelas, data yang relevan, dan target yang terukur.',
      'Keberhasilan implementasi tidak hanya bergantung pada model, tetapi juga proses, manusia, dan tata kelola.'
    ]
  }
];

slides.forEach((s, idx) => {
  const slide = pptx.addSlide();
  slide.background = { color: idx === 0 ? 'DBEAFE' : 'F8FAFC' };
  slide.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 13.333, h: 0.7,
    fill: { color: '2563EB' },
    line: { color: '2563EB' }
  });
  slide.addText(s.title, {
    x: 0.5, y: 0.35, w: 12.2, h: 0.5,
    fontFace: 'Aptos', fontSize: 24, bold: true, color: '0F172A',
    align: 'left', margin: 0
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.7, y: 1.3, w: 11.9, h: 5.4,
    rectRadius: 0.08,
    fill: { color: 'FFFFFF' },
    line: { color: 'CBD5E1', pt: 1 }
  });
  const runs = [];
  s.bullets.forEach((b) => {
    runs.push({
      text: b,
      options: {
        bullet: { indent: 18 },
        breakLine: true,
        fontFace: 'Aptos',
        fontSize: 20,
        color: '1E293B',
        paraSpaceAfterPt: 10
      }
    });
  });
  slide.addText(runs, {
    x: 1.1, y: 1.75, w: 10.9, h: 4.5,
    margin: 0.08,
    valign: 'top'
  });
  slide.addText(`${idx + 1} / ${slides.length}`, {
    x: 11.7, y: 7.0, w: 1.0, h: 0.3,
    fontSize: 10, color: '64748B', align: 'right', margin: 0
  });
});

pptx.writeFile({ fileName: '/home/desta/.openclaw/workspace/ai-machine-learning-profesional-10-slide-fixed.pptx' });
