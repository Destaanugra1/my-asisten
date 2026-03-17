const PptxGenJS = require('pptxgenjs');
const pptx = new PptxGenJS();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenClaw';
pptx.company = 'OpenClaw';
pptx.subject = 'Materi AI dan Machine Learning';
pptx.title = 'AI dan Machine Learning - Modern Clean';
pptx.lang = 'id-ID';
pptx.theme = { headFontFace: 'Aptos', bodyFontFace: 'Aptos', lang: 'id-ID' };

const slides = [
  { title: 'AI dan Machine Learning', subtitle: 'Materi 10 slide — tingkat profesional', bullets: ['Gambaran konsep inti, manfaat bisnis, risiko, dan implementasi praktis.'] },
  { title: 'Apa Itu Artificial Intelligence?', bullets: ['AI adalah bidang yang membuat sistem mampu meniru kemampuan kognitif manusia untuk tugas tertentu.', 'Contoh: analisis teks, visi komputer, pengambilan keputusan, dan otomasi proses.'] },
  { title: 'Apa Itu Machine Learning?', bullets: ['Machine Learning adalah pendekatan AI yang belajar dari data untuk mengenali pola dan membuat prediksi.', 'Model tidak mengandalkan aturan yang ditulis satu per satu secara manual.'] },
  { title: 'AI vs ML vs Deep Learning', bullets: ['AI adalah payung besarnya.', 'Machine Learning adalah subset AI yang belajar dari data.', 'Deep Learning adalah subset ML yang memanfaatkan jaringan saraf berlapis dan komputasi tinggi.'] },
  { title: 'Alur Kerja Machine Learning', bullets: ['Definisikan masalah bisnis.', 'Kumpulkan dan pahami data.', 'Lakukan pembersihan dan persiapan data.', 'Latih, evaluasi, deploy, lalu monitor model secara berkala.'] },
  { title: 'Jenis-Jenis Machine Learning', bullets: ['Supervised Learning: data berlabel, misalnya klasifikasi dan prediksi.', 'Unsupervised Learning: tanpa label, misalnya clustering dan segmentasi.', 'Reinforcement Learning: pembelajaran berbasis reward dan punishment.'] },
  { title: 'Penerapan di Dunia Profesional', bullets: ['Keuangan: fraud detection dan credit scoring.', 'Retail: rekomendasi produk dan prediksi permintaan.', 'Kesehatan: analisis citra medis dan prioritas pasien.', 'Operasional: predictive maintenance dan optimasi supply chain.'] },
  { title: 'Manfaat Bisnis', bullets: ['Efisiensi proses meningkat.', 'Keputusan lebih akurat dan cepat.', 'Layanan pelanggan lebih personal.', 'Mendorong inovasi produk dan model bisnis baru.'] },
  { title: 'Risiko dan Tantangan', bullets: ['Data buruk menghasilkan model buruk.', 'Bias data dapat menimbulkan keputusan tidak adil.', 'Sebagian model sulit dijelaskan.', 'Perlu perhatian pada privasi, keamanan, dan governance.'] },
  { title: 'Kesimpulan', bullets: ['AI dan ML adalah alat strategis, bukan sekadar tren.', 'Mulailah dari masalah nyata, data relevan, dan target terukur.', 'Keberhasilan implementasi ditentukan oleh model, proses, manusia, dan tata kelola.'] }
];

function addHeader(slide, idx){
  slide.addShape(pptx.ShapeType.rect,{x:0,y:0,w:13.333,h:0.45,fill:{color:'1D4ED8'},line:{color:'1D4ED8'}});
  slide.addText(`Slide ${idx+1}`,{x:11.85,y:0.12,w:0.9,h:0.2,fontSize:10,color:'E0F2FE',align:'right',margin:0});
}

slides.forEach((s, idx) => {
  const slide = pptx.addSlide();
  slide.background = { color: idx === 0 ? 'EFF6FF' : 'F8FAFC' };
  addHeader(slide, idx);

  if (idx === 0) {
    slide.addShape(pptx.ShapeType.roundRect,{x:0.75,y:1.0,w:11.8,h:5.5,rectRadius:0.08,fill:{color:'FFFFFF'},line:{color:'DBEAFE',pt:1.5}});
    slide.addShape(pptx.ShapeType.rect,{x:8.9,y:1.45,w:2.5,h:2.5,fill:{color:'BFDBFE'},line:{color:'BFDBFE'}});
    slide.addShape(pptx.ShapeType.rect,{x:9.35,y:1.9,w:1.6,h:1.6,fill:{color:'2563EB'},line:{color:'2563EB'}});
    slide.addText(s.title,{x:1.2,y:1.55,w:6.7,h:0.7,fontSize:26,bold:true,color:'0F172A',margin:0});
    slide.addText(s.subtitle,{x:1.2,y:2.35,w:6.4,h:0.4,fontSize:16,color:'475569',margin:0});
    slide.addText(s.bullets[0],{x:1.2,y:3.2,w:6.8,h:1.0,fontSize:19,color:'1E293B',margin:0});
    slide.addShape(pptx.ShapeType.line,{x:1.2,y:4.55,w:2.4,h:0,line:{color:'60A5FA',pt:2}});
    slide.addText('Siap di-upload ke Google Slides',{x:1.2,y:4.75,w:3.8,h:0.3,fontSize:13,color:'64748B',italic:true,margin:0});
  } else {
    slide.addText(s.title,{x:0.8,y:0.8,w:8.2,h:0.5,fontSize:24,bold:true,color:'0F172A',margin:0});
    slide.addShape(pptx.ShapeType.roundRect,{x:0.75,y:1.45,w:11.85,h:5.35,rectRadius:0.06,fill:{color:'FFFFFF'},line:{color:'E2E8F0',pt:1.2}});
    slide.addShape(pptx.ShapeType.rect,{x:9.95,y:1.85,w:1.7,h:1.7,fill:{color:'DBEAFE'},line:{color:'DBEAFE'}});
    slide.addShape(pptx.ShapeType.rect,{x:10.35,y:2.25,w:0.9,h:0.9,fill:{color:'2563EB'},line:{color:'2563EB'}});
    const runs=[];
    s.bullets.forEach((b)=>runs.push({text:b,options:{bullet:{indent:18},breakLine:true,fontSize:20,color:'1E293B',paraSpaceAfterPt:12}}));
    slide.addText(runs,{x:1.15,y:1.95,w:8.1,h:4.25,margin:0.05,valign:'top'});
  }

  slide.addText('AI & Machine Learning',{x:0.8,y:7.0,w:2.8,h:0.25,fontSize:10,color:'94A3B8',margin:0});
});

pptx.writeFile({ fileName: '/home/desta/.openclaw/workspace/ai-machine-learning-modern-clean-google-slides.pptx' });
