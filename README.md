# PRIME - Project Resource & Interactive Management Essentials

Presentasi interaktif berbasis web tentang Penjadwalan dan Manajemen Proyek menggunakan metode PERT, CPM, dan Gantt Chart.

---

## 📚 Daftar Materi Presentasi

### 🏠 **Landing Page (index.html)**

- Hero section dengan animasi
- Pengenalan singkat tentang PRIME
- Tombol navigasi ke materi
- Visual menarik dengan gradient dan animasi

---

### 📖 **Materi 1: Pengenalan**

**Topik yang Dibahas:**

- Apa itu Penjadwalan Proyek?
- Mengapa penjadwalan penting dalam manajemen proyek?
- Manfaat penjadwalan yang baik
- Konsep dasar manajemen waktu

**Key Points untuk Presentasi:**

- Definisi penjadwalan proyek
- Dampak buruk jika tidak ada penjadwalan yang baik
- Statistik/fakta tentang kegagalan proyek karena manajemen waktu buruk
- 3 metode utama: WBS, CPM/PERT, Gantt Chart

---

### 🚀 **Materi 2: Langkah Awal**

**Topik yang Dibahas:**

- 5 Langkah fundamental dalam penjadwalan proyek:
  1. **Identifikasi Task** - Memecah proyek menjadi tugas-tugas kecil
  2. **Tentukan Durasi** - Estimasi waktu untuk setiap task
  3. **Identifikasi Dependencies** - Menentukan task mana yang bergantung pada task lain
  4. **Alokasi Resource** - Menentukan siapa mengerjakan apa
  5. **Buat Timeline** - Menyusun jadwal keseluruhan proyek

**Key Points untuk Presentasi:**

- Pentingnya breakdown task yang detail
- Cara estimasi durasi yang realistis
- Jenis-jenis dependencies (Finish-to-Start, Start-to-Start, dll)
- Resource constraint dan allocation
- Tools untuk membuat timeline

---

### 🌳 **Materi 3: WBS Interaktif (Work Breakdown Structure)**

**Topik yang Dibahas:**

- Definisi dan tujuan WBS
- Struktur hierarki proyek
- Contoh WBS untuk proyek E-commerce
- Interactive tree view yang bisa expand/collapse

**Struktur WBS E-commerce:**

```
E-commerce Platform
├── Design & Planning (12 hari)
│   ├── UI/UX Design (5 hari)
│   ├── Database Design (4 hari)
│   └── System Architecture (3 hari)
├── Frontend Development (20 hari)
│   ├── User Interface (8 hari)
│   ├── Product Pages (6 hari)
│   └── Shopping Cart (6 hari)
├── Backend Development (25 hari)
│   ├── API Development (10 hari)
│   ├── Database Setup (8 hari)
│   └── Payment Integration (7 hari)
├── Testing (10 hari)
│   ├── Unit Testing (4 hari)
│   ├── Integration Testing (3 hari)
│   └── User Acceptance Testing (3 hari)
└── Deployment (5 hari)
    ├── Server Setup (2 hari)
    ├── Migration (2 hari)
    └── Go Live (1 hari)
```

**Key Points untuk Presentasi:**

- WBS membantu visualisasi scope proyek
- Breakdown sampai level yang actionable
- Estimasi waktu untuk setiap deliverable
- Total durasi proyek: 52 hari kerja (10 minggu)

---

### 📊 **Materi 4: Metode Penjadwalan (PERT & CPM)**

#### **4.1 PERT (Program Evaluation and Review Technique)**

**Topik yang Dibahas:**

- Definisi dan kegunaan PERT
- Konsep three-point estimation
- Formula PERT: `TE = (O + 4M + P) / 6`
  - O = Optimistic (waktu tercepat)
  - M = Most Likely (waktu paling mungkin)
  - P = Pessimistic (waktu terlama)
- Interactive calculator untuk menghitung PERT

**Contoh Perhitungan:**

- Design: O=8, M=12, P=20 → TE = 12.67 hari
- Frontend: O=15, M=20, P=30 → TE = 20.83 hari
- Backend: O=20, M=25, P=35 → TE = 26.25 hari

#### **4.2 CPM (Critical Path Method)**

**Topik yang Dibahas:**

- Definisi Critical Path
- Cara mengidentifikasi jalur kritis
- Forward Pass dan Backward Pass
- Earliest Start (ES), Earliest Finish (EF)
- Latest Start (LS), Latest Finish (LF)
- Float/Slack time
- Interactive calculator untuk mencari critical path

**Key Points untuk Presentasi:**

- Critical Path = jalur terpanjang dalam network diagram
- Task di critical path tidak boleh delay (float = 0)
- Task non-critical bisa delay tanpa impact ke deadline
- Focus resource ke critical path tasks

---

### 📈 **Materi 5: Gantt Chart**

**Topik yang Dibahas:**

- Definisi dan kegunaan Gantt Chart
- Komponen Gantt Chart (timeline, tasks, bars, dependencies)
- Cara membaca Gantt Chart
- Interactive Gantt Chart dengan animasi
- Color coding: Critical path (merah), Normal task (ungu)

**Gantt Chart E-commerce:**

- Timeline: Week 1-10
- Task bars dengan durasi visual
- Dependencies ditunjukkan dengan posisi bar
- Hover effects untuk detail

**Key Points untuk Presentasi:**

- Gantt Chart untuk komunikasi visual dengan stakeholder
- Mudah melihat overlap/parallel tasks
- Track progress proyek
- Identify delays dengan cepat
- Tools populer: Microsoft Project, Asana, Trello

---

### 🔗 **Materi 6: Network Diagram**

**Topik yang Dibahas:**

- Definisi Network Diagram
- Activity-on-Node (AON) representation
- Node components: ES, EF, LS, LF, Task Name, Duration
- Dependencies dan arrows
- Critical path visualization (red arrows)

**Langkah Membuat Network Diagram:**

1. List semua activities
2. Tentukan dependencies
3. Gambar nodes untuk setiap activity
4. Hubungkan dengan arrows
5. Hitung ES, EF, LS, LF (forward & backward pass)
6. Identifikasi critical path

**Interactive Features:**

- Click untuk highlight jalur
- Show critical path
- Show all paths
- Node dengan info lengkap (ES, EF, LS, LF, Slack)

**Key Points untuk Presentasi:**

- Network diagram show logical flow of work
- Visualisasi dependencies yang complex
- Basis untuk CPM calculation
- Critical path = red arrows (zero slack)

---

### 💼 **Materi 7: Studi Kasus - E-commerce Platform**

**Topik yang Dibahas:**

- Overview proyek E-commerce
- Objectives dan deliverables
- Integration flow diagram
- Detail setiap phase
- Gantt Chart visualization untuk case study
- Key findings dan insights

**Project Overview:**

- **Duration**: 52 hari kerja (10 minggu)
- **Critical Path**: Design → Backend → Testing → Deploy
- **Total Tasks**: 5 main phases, 15 sub-tasks
- **Resource**: Frontend dev, Backend dev, Designer, QA

**Integration Flow:**

```
Client → Frontend → API Gateway → Backend Services → Database
                  ↓
            Payment Gateway
                  ↓
            Email Service
```

**Key Findings:**

1. Backend development adalah bottleneck (25 hari, critical path)
2. Frontend bisa parallel dengan early backend work (save time)
3. Testing phase critical untuk quality assurance
4. Deployment perlu planning matang (downtime, migration)

**Success Metrics:**

- On-time delivery: ✅ 52 hari
- Budget: ✅ Within allocated budget
- Quality: ✅ All tests passed
- Client satisfaction: ✅ High

**Key Points untuk Presentasi:**

- Real-world application of all methods learned
- Demonstrate how PERT, CPM, Gantt work together
- Show decision-making process
- Highlight risk mitigation strategies
- Lessons learned

---

### 🎯 **Materi 8: Kesimpulan & Lampiran**

**Topik yang Dibahas:**

#### **8.1 Ringkasan Pembelajaran**

- Recap 3 metode: WBS, PERT/CPM, Gantt Chart
- Kapan menggunakan metode mana
- Integration antar metode

#### **8.2 Perbandingan Metode**

| Metode    | Kelebihan                                  | Kekurangan                                            | Best Use Case                       |
| --------- | ------------------------------------------ | ----------------------------------------------------- | ----------------------------------- |
| **WBS**   | Comprehensive breakdown, Clear scope       | Time consuming, Butuh detail tinggi                   | Large complex projects              |
| **PERT**  | Handle uncertainty, 3-point estimate       | Complex calculation, Estimasi bisa bias               | Projects dengan high uncertainty    |
| **CPM**   | Identify critical path, Optimize resources | Assumes fixed durations, Complex untuk large projects | Projects dengan banyak dependencies |
| **Gantt** | Visual timeline, Easy to understand        | Tidak show dependencies well, Hard to update          | Communication dengan stakeholders   |

#### **8.3 Tools & Software**

**Project Management Tools:**

- Microsoft Project (comprehensive, enterprise)
- Asana (collaboration, agile)
- Trello (simple, kanban-style)
- Jira (software development, agile)
- Monday.com (visual, customizable)
- Smartsheet (spreadsheet-based)

**Gantt Chart Specific:**

- GanttProject (open-source)
- TeamGantt (collaborative)
- Wrike (advanced features)

#### **8.4 Best Practices**

1. **Start with WBS** - Break down proyek sampai actionable level
2. **Use PERT for estimates** - Handle uncertainty dengan 3-point
3. **Calculate CPM** - Identify critical path untuk focus
4. **Visualize dengan Gantt** - Communication tool untuk stakeholder
5. **Update regularly** - Track actual vs planned
6. **Buffer time** - Add contingency untuk risk
7. **Resource leveling** - Avoid overallocation
8. **Stakeholder communication** - Regular updates

#### **8.5 Tips Presentasi**

- Mulai dengan WBS untuk show scope
- Explain PERT calculation dengan contoh
- Highlight critical path dengan warna
- Use Gantt Chart untuk timeline overview
- Show studi kasus untuk real application
- Q&A preparation untuk detail teknis

#### **8.6 Referensi**

- Project Management Body of Knowledge (PMBOK Guide)
- Critical Chain Project Management (Goldratt)
- The Fast Forward MBA in Project Management
- Harvard Business Review: Project Management articles

**Key Points untuk Presentasi:**

- Recap all learning objectives
- Emphasize practical application
- Tools recommendation
- Next steps untuk audience
- Q&A session

---

## 🎨 Fitur Interaktif

### **Navigation:**

- Keyboard shortcuts: Arrow keys untuk navigasi, 'M' untuk menu
- Slide menu di semua halaman
- Mobile navigation buttons (bottom screen, mobile only)
- Progress tracking

### **Interactive Elements:**

- WBS Tree View (expand/collapse)
- PERT Calculator (real-time calculation)
- CPM Calculator (critical path finder)
- Gantt Chart animations
- Network Diagram (clickable paths)
- Hover effects dan tooltips

### **Responsive Design:**

- Desktop optimized
- Tablet friendly
- Mobile responsive dengan navigation buttons
- Touch-friendly interactions

---

## 🎯 Tujuan Pembelajaran

Setelah presentasi ini, audience akan mampu:

1. ✅ Memahami pentingnya penjadwalan proyek
2. ✅ Membuat Work Breakdown Structure (WBS)
3. ✅ Menghitung estimasi waktu dengan PERT
4. ✅ Mengidentifikasi Critical Path dengan CPM
5. ✅ Membuat dan membaca Gantt Chart
6. ✅ Menggambar Network Diagram
7. ✅ Mengaplikasikan metode pada proyek nyata
8. ✅ Memilih tools yang tepat untuk project management

---

## 💡 Tips Persiapan Presentasi

### **Sebelum Presentasi:**

1. **Practice navigation** - Familiarize dengan keyboard shortcuts
2. **Test interactive features** - Pastikan calculator dan animations bekerja
3. **Prepare backup** - Print slides atau PDF backup
4. **Time management** - Alokasi waktu per materi (total ~45-60 menit)
5. **Q&A preparation** - Siapkan jawaban untuk pertanyaan umum

### **Durasi Rekomendasi:**

- Materi 1-2: 5 menit (intro & basics)
- Materi 3: 5 menit (WBS explanation)
- Materi 4: 10 menit (PERT & CPM, paling teknis)
- Materi 5: 5 menit (Gantt Chart visual)
- Materi 6: 8 menit (Network Diagram)
- Materi 7: 10 menit (Case study, paling penting)
- Materi 8: 5 menit (conclusion & recap)
- Q&A: 10-15 menit

### **Saat Presentasi:**

1. Start dengan landing page untuk first impression
2. Explain navigation di awal (keyboard shortcuts)
3. Use interactive features untuk engagement
4. Pause untuk questions di setiap section
5. Highlight case study sebagai practical application
6. End dengan actionable takeaways

### **Key Messages:**

- Penjadwalan = foundation of successful projects
- Multiple methods untuk different purposes
- Integration antar metode untuk hasil optimal
- Tools hanya alat, methodology yang penting
- Practice makes perfect

---

## 🛠️ Technical Stack

- **HTML5** - Structure
- **CSS3** - Styling dengan animations
- **JavaScript (Vanilla)** - Interactivity
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Montserrat, Poppins)

---

## 📱 Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚀 Quick Start

1. Buka `index.html` di browser
2. Gunakan arrow keys atau klik untuk navigasi
3. Press 'M' untuk slide menu
4. Explore interactive features di setiap slide
5. Mobile: Gunakan navigation buttons di bottom screen

---

## 📝 Catatan Penting

- **Critical Path** selalu berwarna merah
- **Normal tasks** berwarna ungu/biru
- **Float/Slack** = flexibility in scheduling
- **Dependencies** = relationship antar tasks
- **Resource leveling** = balance workload

---

## 🎓 Learning Outcomes Checklist

Sebelum presentasi, pastikan kamu bisa:

- [ ] Menjelaskan perbedaan WBS, PERT, CPM, Gantt
- [ ] Menghitung PERT dengan formula three-point
- [ ] Mengidentifikasi critical path dari network diagram
- [ ] Membaca Gantt Chart dan explain timeline
- [ ] Apply methods ke case study E-commerce
- [ ] Recommend tools untuk different project types
- [ ] Answer pertanyaan tentang project scheduling

---

## 📞 Support

Untuk pertanyaan atau issues, hubungi tim development.

---

**Good luck dengan presentasi! 🎉**

Remember: Confidence + Preparation = Great Presentation! 💪
