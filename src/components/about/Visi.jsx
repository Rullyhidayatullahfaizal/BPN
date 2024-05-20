import React, { useState } from "react";
import UseScrollSpy from "./Scroolspy";
import "../../App.css";

export const Visi = () => {
  const [activeId, setActiveId] = useState("");

  UseScrollSpy(setActiveId);

  return (
    <div className="bg-gradient-to-t from-[#23494A] to-[#BFFFC7] pt-10 pb-32  mt-10 w-full flex flex-col sm:px-32 ">
      <h1 className="mb-10 text-center font-bold text-xl text-green_three sm:text-3xl">
        Membangun Masa Depan <br />
        Visi, Misi, dan Tupoksi{" "}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 bg-orange-100 sm:px-5 sm:rounded sm:border-green_two sm:border-4 ">
        <div className="col-span-2">
          <div
            className="relative h-80 overflow-auto border-y-2 border-green_three "
            id="scroll-container "
          >
            <section id="example-1">
              <h3 className="pb-3 pt-5 text-xl font-semibold">Visi</h3>
              <ul className="list-inside space-y-2">
                <li>
                  Meningkatkan ketersediaan dan cadangan pangan yang bersumber
                  dari produksi dalam negeri.
                </li>
                <li>Memperkuat sistem logistik pangan.</li>
                <li>
                  Menurunkan daerah rentan rawan pangan dan masyarakat yang
                  tidak berkecukupan pangan dan gizi.
                </li>
                <li>
                  Meningkatkan konsumsi pangan masyarakat yang beragam dan
                  bergizi seimbang berbasis potensi sumberdaya lokal.
                </li>
                <li>Meningkatkan jaminan keamanan dan mutu pangan segar.</li>
                <li>
                  Meningkatkan tata kelola organisasi Badan Pangan Nasional
                  dalam mewujudkan organisasi yang transparan, akuntabel,
                  profesional dan berintegritas tinggi dalam memberikan layanan
                  kepada masyarakat.
                </li>
              </ul>
            </section>
            <section id="example-2">
              <h3 className="pb-3 pt-5 text-xl font-semibold">Misi</h3>
              <ul className=" list-inside space-y-2">
                <li>Menguatkan ketersediaan dan cadangan pangan.</li>
                <li>Memantapkan stabilitas pasokan dan harga pangan.</li>
                <li>Mengentaskan kerawanan pangan dan gizi.</li>
                <li>Menjamin keamanan dan mutu pangan segar.</li>
                <li>
                  Mengoptimalkan pemanfaatan pangan dan gizi yang berkualitas
                  untuk hidup sehat, aktif dan produktif.
                </li>
                <li>
                  Mengelola Badan Pangan Nasional yang bersih, efektif dan
                  terpercaya.
                </li>
              </ul>
            </section>
            <section id="example-3">
              <h3 className="pb-3 pt-5 text-xl font-semibold">Tugas</h3>
              <p>
                Badan Pangan Nasional mempunyai tugas melaksanakan tugas
                pemerintahan di bidang pangan.
              </p>
            </section>
            <section id="example-4">
              <h3 className="pb-3 pt-5 text-xl font-semibold">Fungsi</h3>
              <ul className="list-inside space-y-2">
                <li>
                  Koordinasi, perumusan, dan penetapan kebijakan ketersediaan
                  pangan, stabilisasi pasokan dan harga pangan, kerawanan pangan
                  dan gizi, penganekaragaman konsumsi pangan, dan keamanan
                  pangan;
                </li>
                <li>
                  Koordinasi pelaksanaan kebijakan ketersediaan pangan,
                  stabilisasi pasokan dan harga pangan, kerawanan pangan dan
                  gizi, penganekaragaman konsumsi pangan, dan keamanan pangan;
                </li>
                <li>
                  Pelaksanaan pengadaan, pengelolaan, dan penyaluran cadangan
                  pangan pemerintah melalui Badan Usaha Milik Negara di bidang
                  pangan;
                </li>
                <li>
                  Pelaksanaan pengendalian kerawanan pangan dan pengawasan
                  pemenuhan persyarat an gizi pangan ;
                </li>
                <li>
                  Pelaksanaan pengembangan dan pemantapan penganekaragaman dan
                  pola konsumsi pangan, serta pengawasan penerapan standar
                  keamanan pangan yang beredar;
                </li>
                <li>
                  Pelaksanaan bimbingan teknis dan supervisi atas pelaksanaan
                  urusan di bidang pangan;
                </li>
                <li>Pengembangan sistem informasi pangan;</li>
                <li>
                  Koordinasi pelaksanaan tugas, pembinaan, dan pemberian
                  dukungan administrasi kepada seluruh unsur organisasi di
                  lingkungan Badan Pangan Nasional;
                </li>
                <li>
                  Pengelolaan barang milik negara yang menjadi tanggung jawab
                  Badan Pangan Nasional;
                </li>
                <li>
                  Pelaksanaan dukungan yang bersifat substantif kepada seluruh
                  unsur organisasi di lingkungan Badan Pangan Nasional; dan
                </li>
                <li>
                  Pengawasan atas pelaksanaan tugas di lingkungan Badan Pangan
                  Nasional.
                </li>
              </ul>
            </section>
          </div>
        </div>
        <div>
          <div id="scrollspy1" className="sticky top-0 mt-2 ps-3 text-sm">
            <ul className="font-semibold">
              <li className="py-1">
                <a
                  className={`bg-transparent px-[5px] ${
                    activeId === "example-1" ? "text-green_two" : "text-black"
                  } shadow-none dark:text-neutral-200`}
                  href="#example-1"
                >
                  Visi
                </a>
              </li>
              <li className="py-1">
                <a
                  className={`bg-transparent px-[5px] ${
                    activeId === "example-2" ? "text-green_two" : "text-black"
                  } shadow-none dark:text-neutral-200`}
                  href="#example-2"
                >
                  Misi
                </a>
              </li>
              <li className="py-1">
                <a
                  className={`bg-transparent px-[5px] ${
                    activeId === "example-3" ? "text-green_two" : "text-black-600"
                  } shadow-none dark:text-neutral-200`}
                  href="#example-3"
                >
                  Tugas
                </a>
              </li>
              <li className="py-1">
                <a
                  className={`bg-transparent px-[5px] ${
                    activeId === "example-4" ? "text-green_two" : "text-black"
                  } shadow-none dark:text-neutral-200`}
                  href="#example-4"
                >
                  Fungsi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
