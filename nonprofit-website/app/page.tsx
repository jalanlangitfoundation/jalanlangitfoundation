import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Users,
  Target,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  BookOpen,
  Gift,
  ChurchIcon as Mosque,
  Gamepad2,
  Globe,
  GraduationCap,
  TrendingUp,
  Building,
  Lightbulb,
  Handshake,
} from "lucide-react"

export default function JalanLangitFoundation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#329ed9] to-[#83ccee] rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Jalan Langit Foundation</h1>
                <p className="text-xs text-[#329ed9]">Filantropi Muslim Global</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-[#329ed9] transition-colors">
                Beranda
              </a>
              <a href="#tentang" className="text-gray-700 hover:text-[#329ed9] transition-colors">
                Tentang Kami
              </a>
              <a href="#program" className="text-gray-700 hover:text-[#329ed9] transition-colors">
                Program
              </a>
              <a href="#dampak" className="text-gray-700 hover:text-[#329ed9] transition-colors">
                Dampak
              </a>
              <a href="#kontak" className="text-gray-700 hover:text-[#329ed9] transition-colors">
                Kontak
              </a>
            </nav>
            <Button className="bg-[#329ed9] hover:bg-[#2a8bc4] text-white">Donasi Sekarang</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="bg-gradient-to-br from-[#83ccee]/20 to-[#329ed9]/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Menjadi Lembaga
                <span className="text-[#329ed9]"> Filantropi Muslim</span> Global Terdepan
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Jalan Langit Foundation berkomitmen meningkatkan kesejahteraan dan kualitas hidup masyarakat melalui
                pendidikan Islami yang inklusif, pemberdayaan ekonomi, dan optimalisasi infak, sedekah, dan wakaf.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#329ed9] hover:bg-[#2a8bc4] text-white">
                  Bergabung dengan Kami
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#329ed9] text-[#329ed9] hover:bg-[#329ed9] hover:text-white bg-transparent"
                >
                  Pelajari Program Kami
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero-education.jpg"
                alt="Anak-anak belajar dengan teknologi interaktif"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#329ed9] mb-2">20,000+</div>
              <div className="text-gray-600 text-sm md:text-base">Santri Terbantu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#329ed9] mb-2">7</div>
              <div className="text-gray-600 text-sm md:text-base">Pondok Mitra Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#329ed9] mb-2">25,000+</div>
              <div className="text-gray-600 text-sm md:text-base">Donatur</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#329ed9] mb-2">2M+</div>
              <div className="text-gray-600 text-sm md:text-base">Donasi Tersalurkan</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tentang Jalan Langit Foundation</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Transformasi dari Jalan Langit Peduli yang berdiri pada 10 Oktober 2022, kami hadir dengan wajah baru
              untuk memberikan kontribusi dan dampak yang lebih besar dalam ekosistem kebaikan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/images/landscape-bandung.jpg"
                alt="Pemandangan Bandung - Lokasi Jalan Langit Foundation"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Visi Kami</h3>
                <p className="text-gray-600">
                  Menjadi lembaga filantropi Muslim global yang terdepan dalam meningkatkan kesejahteraan dan kualitas
                  hidup masyarakat.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Fokus Utama</h3>
                <p className="text-gray-600">
                  Pengembangan program pendidikan dan pemberdayaan berbasis nilai, yang mencakup peningkatan kualitas
                  individu (santri, pelajar, dan pemuda), kompetensi guru dan fasilitator, serta penguatan ekosistem
                  belajar di lingkungan pesantren maupun masyarakat umum.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-[#83ccee]/30">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-[#329ed9] mx-auto mb-4" />
                <CardTitle className="text-[#329ed9]">Pendidikan Berkualitas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Meningkatkan kualitas pendidikan melalui program edukasi dan pelatihan Islami yang inklusif dan mudah
                  diakses.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-[#83ccee]/30">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[#329ed9] mx-auto mb-4" />
                <CardTitle className="text-[#329ed9]">Pemberdayaan Ekonomi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Meningkatkan kesejahteraan masyarakat melalui program sosial dan pemberdayaan ekonomi.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-[#83ccee]/30">
              <CardHeader>
                <Handshake className="h-12 w-12 text-[#329ed9] mx-auto mb-4" />
                <CardTitle className="text-[#329ed9]">Jejaring Kolaboratif</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Membangun jejaring kolaboratif dengan optimalisasi infak, sedekah, dan wakaf.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-[#83ccee]/30">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-[#329ed9] mx-auto mb-4" />
                <CardTitle className="text-[#329ed9]">Inovasi & Teknologi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mendorong inovasi dan teknologi untuk transparansi dan edukasi massal.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="program" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Kami</h2>
            <p className="text-xl text-gray-600">
              Program-program unggulan untuk pemberdayaan dan pendidikan berbasis nilai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-[#83ccee]/30">
              <img
                src="/images/sharing-session.jpg"
                alt="Jalan Langit Sharing Session"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="h-5 w-5 text-[#329ed9]" />
                  <CardTitle className="text-[#329ed9]">Jalan Langit Sharing Session</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Forum pembelajaran dan refleksi untuk generasi muda, dikemas dalam bentuk diskusi daring maupun sesi
                  tatap muka. Mengangkat tema spiritualitas, pencarian makna diri, dan isu-isu kehidupan bersama
                  narasumber terpercaya.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-[#83ccee]/30">
              <img src="/images/santri-gathering.jpg" alt="Program Langit Box" className="w-full h-48 object-cover" />
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Gift className="h-5 w-5 text-[#329ed9]" />
                  <CardTitle className="text-[#329ed9]">Langit Box</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Program pemenuhan kebutuhan gizi dan pangan melalui distribusi makanan siap saji, paket sembako, dan
                  hygiene kit kepada santri dan masyarakat dhuafa. Didistribusikan secara reguler maupun pada momen
                  khusus.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-[#83ccee]/30">
              <img src="/images/group-mosque.jpg" alt="Indonesia Cetak Huffadz" className="w-full h-48 object-cover" />
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Mosque className="h-5 w-5 text-[#329ed9]" />
                  <CardTitle className="text-[#329ed9]">Indonesia Cetak Huffadz</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Inisiatif pendidikan berbasis wakaf dan donasi untuk mendukung proses penghafalan Al-Qur'an. Meliputi
                  pembiayaan pendidikan santri, peningkatan kesejahteraan guru pengajar Qur'an, serta penyediaan
                  fasilitas belajar.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-[#83ccee]/30">
              <img src="/images/ramadhan-event.jpg" alt="Program SERASI" className="w-full h-48 object-cover" />
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Gamepad2 className="h-5 w-5 text-[#329ed9]" />
                  <CardTitle className="text-[#329ed9]">SERASI</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Program berbasis event yang bertujuan untuk menghadirkan kebahagiaan dan pengalaman edukatif kepada
                  santri melalui kegiatan menyenangkan seperti games, nonton bareng, dan rekreasi edukatif.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="py-20 bg-gradient-to-br from-[#83ccee]/10 to-[#329ed9]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontribusi Terhadap SDGs</h2>
            <p className="text-xl text-gray-600">
              Mendukung Tujuan Pembangunan Berkelanjutan melalui program-program kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-[#83ccee]/30">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#329ed9] rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <CardTitle className="text-[#329ed9]">Pendidikan Berkualitas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mendukung akses pendidikan Islami yang layak dan berkualitas melalui program beasiswa, pelatihan, dan
                  forum edukatif.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-[#83ccee]/30">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#329ed9] rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <CardTitle className="text-[#329ed9]">Tanpa Kemiskinan</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Menghadirkan solusi langsung bagi kebutuhan dasar masyarakat rentan melalui program bantuan pangan dan
                  penguatan ekonomi.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-[#83ccee]/30">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#329ed9] rounded-full flex items-center justify-center text-white font-bold">
                    8
                  </div>
                  <CardTitle className="text-[#329ed9]">Pekerjaan Layak</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Memberdayakan guru dan pengajar Qur'an dengan dukungan insentif, pelatihan, dan peluang kolaborasi.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-[#83ccee]/30">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#329ed9] rounded-full flex items-center justify-center text-white font-bold">
                    10
                  </div>
                  <CardTitle className="text-[#329ed9]">Mengurangi Kesenjangan</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Menjangkau kelompok marginal seperti yatim, dhuafa, dan pesantren kurang mampu melalui distribusi
                  sumber daya yang adil.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-[#83ccee]/30">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#329ed9] rounded-full flex items-center justify-center text-white font-bold">
                    9
                  </div>
                  <CardTitle className="text-[#329ed9]">Industri & Inovasi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mendorong pengembangan infrastruktur pendidikan dan digitalisasi layanan sosial.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-[#83ccee]/30">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#329ed9] rounded-full flex items-center justify-center text-white font-bold">
                    17
                  </div>
                  <CardTitle className="text-[#329ed9]">Kemitraan Global</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Membangun jejaring dan kolaborasi strategis untuk memperluas dampak program secara berkelanjutan.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="dampak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dampak & Pencapaian</h2>
            <p className="text-xl text-gray-600">Kontribusi nyata kami untuk masyarakat</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#329ed9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#329ed9] mb-2">9</div>
              <div className="text-gray-600">Pondok & Panti Mitra</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#329ed9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#329ed9] mb-2">20,000+</div>
              <div className="text-gray-600">Santri Terbantu</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#329ed9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#329ed9] mb-2">10+</div>
              <div className="text-gray-600">Event Terselenggara</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#329ed9] rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#329ed9] mb-2">25+</div>
              <div className="text-gray-600">Mitra Kebaikan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">Mari bergabung atau berkolaborasi dengan kami</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-[#329ed9] mt-1" />
                  <span className="text-gray-600">
                    Jl. Saturnus Sel. VII No.16, Margasari, RT06 / RW14, Kec. Buahbatu, Kota Bandung, Jawa Barat 40286
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#329ed9]" />
                  <span className="text-gray-600">jalanlangitfoundation@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-[#329ed9]" />
                  <span className="text-gray-600">www.jalanlangitpeduli.com</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Ikuti Kami</h4>
                <div className="flex justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 border-[#329ed9] text-[#329ed9] hover:bg-[#329ed9] hover:text-white bg-transparent"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 border-[#329ed9] text-[#329ed9] hover:bg-[#329ed9] hover:text-white bg-transparent"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 border-[#329ed9] text-[#329ed9] hover:bg-[#329ed9] hover:text-white bg-transparent"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">@jalanlangit.official</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#329ed9] to-[#83ccee] rounded-lg flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Jalan Langit Foundation</h3>
                  <p className="text-xs text-[#83ccee]">Filantropi Muslim Global</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Menjadi lembaga filantropi Muslim global yang terdepan dalam meningkatkan kesejahteraan dan kualitas
                hidup masyarakat.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Program</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sharing Session
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Langit Box
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Indonesia Cetak Huffadz
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    SERASI
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Tentang</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Visi & Misi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tim Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Laporan Keuangan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mitra
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Dukungan</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cara Donasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Menjadi Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Wakaf
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Jalan Langit Foundation. Semua hak dilindungi.</p>
            <p className="mt-2">Transformasi dari Jalan Langit Peduli - Berdiri 10 Oktober 2022</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
