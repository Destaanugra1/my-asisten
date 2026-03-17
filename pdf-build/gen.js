const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream('/home/desta/.openclaw/workspace/RAB_PKM-RE_MINKO.pdf'));

// Title
doc.fontSize(16).font('Helvetica-Bold').text('Rencana Anggaran Biaya (RAB) PKM-RE 2026', { align: 'center' });
doc.fontSize(12).text('Judul: Peningkatan Kecepatan Chatbot Akademik melalui Ekstraksi Data Sentimen dan Niat Pengguna Sekaligus pada Large Language Model (LLM)', { align: 'center' });
doc.moveDown();

// Intro
doc.fontSize(10).font('Helvetica').text('Sesuai dengan pedoman PKM-RE, alokasi dana maksimal adalah Rp 10.000.000,- dengan persentase:');
doc.text('- Bahan Habis Pakai: 10-25%');
doc.text('- Sewa dan Jasa: 15-25%');
doc.text('- Perjalanan Lokal: 10-25%');
doc.text('- Lain-lain (Publikasi, Seminar, Administrasi): Maks 15%');
doc.moveDown();

const drawTable = (doc, tableData) => {
    let y = doc.y;
    doc.font('Helvetica-Bold');
    // Header
    doc.text('No.', 50, y, { width: 30 });
    doc.text('Jenis Pengeluaran', 80, y, { width: 250 });
    doc.text('Volume', 330, y, { width: 50 });
    doc.text('Harga Satuan', 380, y, { width: 80 });
    doc.text('Total (Rp)', 460, y, { width: 80 });
    doc.moveDown();
    y += 15;
    
    doc.moveTo(50, y).lineTo(540, y).stroke();
    y += 5;
    
    doc.font('Helvetica');
    let totalAll = 0;
    
    tableData.forEach((row) => {
        if (row.header) {
            doc.font('Helvetica-Bold');
            doc.text(row.header, 50, y, { width: 490 });
            doc.font('Helvetica');
            y += 15;
        } else {
            doc.text(row.no, 50, y, { width: 30 });
            doc.text(row.item, 80, y, { width: 250 });
            doc.text(row.vol, 330, y, { width: 50 });
            doc.text(row.price, 380, y, { width: 80 });
            doc.text(row.total, 460, y, { width: 80 });
            totalAll += row.rawTotal;
            y += row.item.length > 50 ? 25 : 15;
        }
    });
    
    y += 5;
    doc.moveTo(50, y).lineTo(540, y).stroke();
    y += 5;
    
    doc.font('Helvetica-Bold');
    doc.text('TOTAL KESELURUHAN', 80, y, { width: 250 });
    doc.text(totalAll.toLocaleString('id-ID'), 460, y, { width: 80 });
};

const rabData = [
    { header: '1. Bahan Habis Pakai (Pengumpulan & Pengolahan Data)' },
    { no: '1.1', item: 'Lisensi Google Workspace/Cloud Storage (Penyimpanan Dataset 500+ entri)', vol: '3 Bulan', price: '150.000', total: '450.000', rawTotal: 450000 },
    { no: '1.2', item: 'ATK (Kertas HVS, Tinta Printer, Flashdisk) untuk dokumentasi', vol: '1 Paket', price: '500.000', total: '500.000', rawTotal: 500000 },
    { no: '1.3', item: 'Kuota Internet Tim (Pengujian & Scraping Log Chat)', vol: '3 Paket', price: '250.000', total: '750.000', rawTotal: 750000 },
    
    { header: '2. Sewa dan Jasa (Infrastruktur & API)' },
    { no: '2.1', item: 'Sewa Server VPS (Hosting Bot WA & Webhook)', vol: '4 Bulan', price: '250.000', total: '1.000.000', rawTotal: 1000000 },
    { no: '2.2', item: 'Kredit API Google Gemini (Model Pay-as-you-go & Imagen)', vol: '1 Paket', price: '2.500.000', total: '2.500.000', rawTotal: 2500000 },
    
    { header: '3. Perjalanan Lokal' },
    { no: '3.1', item: 'Transportasi ke Kampus UMKO (Pengambilan Data & Uji Coba)', vol: '10 Kali', price: '100.000', total: '1.000.000', rawTotal: 1000000 },
    
    { header: '4. Lain-lain (Publikasi, Seminar, Laporan)' },
    { no: '4.1', item: 'Biaya Publikasi Jurnal Ilmiah (SINTA 2/3 atau Internasional)', vol: '1 Makalah', price: '1.500.000', total: '1.500.000', rawTotal: 1500000 },
    { no: '4.2', item: 'Penggandaan dan Penjilidan Laporan Kemajuan & Akhir', vol: '1 Paket', price: '300.000', total: '300.000', rawTotal: 3000000 },
    { no: '4.3', item: 'Pembuatan Poster & Standing Banner Riset', vol: '1 Set', price: '250.000', total: '250.000', rawTotal: 250000 }
];

drawTable(doc, rabData);

doc.moveDown(2);
doc.fontSize(10).font('Helvetica-Oblique').text('Catatan: Anggaran ini dapat disesuaikan dengan kebutuhan riil di lapangan dan standar biaya yang berlaku di UMKO.', { align: 'center' });

doc.end();
console.log('PDF Generated');
