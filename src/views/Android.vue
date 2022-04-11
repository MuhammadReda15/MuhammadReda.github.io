<template>
    <section class="android-section">
        <h1 class="android-heading">
            Some of my <strong>Android</strong> course task
        </h1>

        <div class="android-container">
            <div class="android-card">
                <img
                    class="android-img"
                    src="../assets/Frame 1task1.png"
                    alt="1st Task"
                    width="523"
                    height="339"
                />

                <div class="android-content">
                    <h1 class="android-title">Android task 01</h1>
                    <p class="android-info">
                        Membuat aplikasi cashier sederhana dengan menggunakan
                        Edit Text, menghitung harga smartphone berdasarkan Kode
                        barang dan mengambil diskon barang dari 2 digit angka
                        akhir dari kode barang
                    </p>

                    <div class="android-btn-grp">
                        <a
                            href="https://github.com/MuhammadReda15/simpleCashier"
                            target="_blank"
                            ><button class="android-btn github">
                                Github repo
                            </button></a
                        >
                        <a href="/Task1" target="_blank"
                            ><button class="android-btn live">
                                See live
                            </button></a
                        >
                    </div>
                </div>
            </div>

            <div class="android-card">
                <img
                    class="android-img"
                    src="../assets/task2.png"
                    alt="2nd Task"
                    width="523"
                    height="339"
                />

                <div class="android-content">
                    <h1 class="android-title">Android task 02</h1>
                    <p class="android-info">
                        Membuat appbar dalam aplikasi Android. Menghilangkan
                        Appbar default dari android studio dengan mengubah style
                        theme aplikasi android. Menggunakan relative layout
                        untuk memberikan advanced fungsi dari layout
                    </p>

                    <div class="android-btn-grp">
                        <a
                            href="https://github.com/MuhammadReda15/AppBarKontak"
                            target="_blank"
                            ><button class="android-btn github">
                                Github repo
                            </button></a
                        >
                        <a href="/Task2" target="_blank"
                            ><button class="android-btn live">
                                See live
                            </button></a
                        >
                    </div>
                </div>
            </div>

            <div class="android-card">
                <img
                    class="android-img"
                    src="../assets/task3.png"
                    alt="3rd Task"
                    width="523"
                    height="339"
                />

                <div class="android-content">
                    <h1 class="android-title">Android task 03</h1>
                    <p class="android-info">
                        Membuat layout aplikasi dengan table row yang memberikan
                        kesan seperti menu, saat button diklik maka akan
                        mengarahkan kedalam menu lain yang lebih kompleks.
                        memanggil fungsi telepon, lokasi (maps), search google,
                        dan sebagainya.
                    </p>

                    <div class="android-btn-grp">
                        <a
                            href="https://github.com/MuhammadReda15/GoApps"
                            target="_blank"
                            ><button class="android-btn github">
                                Github repo
                            </button></a
                        >
                        <a href="/Task3" target="_blank"
                            ><button class="android-btn live">
                                See live
                            </button></a
                        >
                    </div>
                </div>
            </div>

            <div class="android-card">
                <img
                    class="android-img"
                    src="../assets/task4.png"
                    alt="4th Task"
                    width="523"
                    height="339"
                />

                <div class="android-content">
                    <h1 class="android-title">Android task 04</h1>
                    <p class="android-info">
                        Membuat layout Log-in dengan tipe layout menu sidebar.
                        Memasukkan username dan Email sebagai header dari
                        sidebar.
                    </p>

                    <div class="android-btn-grp">
                        <a
                            href="https://github.com/MuhammadReda15/Go2App"
                            target="_blank"
                            ><button class="android-btn github">
                                Github repo
                            </button></a
                        >
                        <a href="/task4" target="_blank"
                            ><button class="android-btn live">
                                See live
                            </button></a
                        >
                    </div>
                </div>
            </div>

            <div class="android-card">
                <img
                    class="android-img"
                    src="../assets/task5.png"
                    alt="5th Task"
                    width="523"
                    height="339"
                />

                <div class="android-content">
                    <h1 class="android-title">Android task 05</h1>
                    <p class="android-info">
                        Tugas kuis pertama, membuat aplikasi cashier sederhana
                        dengan menggunakan intent dan fungsi putExtra untuk
                        menghitung pada layout lain.
                    </p>

                    <div class="android-btn-grp">
                        <a
                            href="https://github.com/MuhammadReda15/cash"
                            target="_blank"
                            ><button class="android-btn github">
                                Github repo
                            </button></a
                        >
                        <a href="/task5" target="_blank"
                            ><button class="android-btn live">
                                See live
                            </button></a
                        >
                    </div>
                </div>
            </div>

            <div class="android-card">
                <img
                    class="android-img"
                    src="../assets/task6.png"
                    alt="6th Task"
                    width="523"
                    height="339"
                />

                <div class="android-content">
                    <h1 class="android-title">Android task 05</h1>
                    <p class="android-info">
                        Membuat layout replika dari Google Meet, menggunakan
                        sidebar menu, costum appbar, bottom drawer popup, back
                        intent.
                    </p>

                    <div class="android-btn-grp">
                        <a
                            href="https://github.com/MuhammadReda15/GoogleMeet"
                            target="_blank"
                            ><button class="android-btn github">
                                Github repo
                            </button></a
                        >
                        <a href="/task6" target="_blank"
                            ><button class="android-btn live">
                                See live
                            </button></a
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    .android-heading {
        color: white;
        text-align: center;
        margin-top: 40px;
    }

    .android-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 100px;
    }

    .android-card {
        height: 300px;
        position: relative;
        margin-left: 70px;
        margin-top: 30px;
    }

    .android-img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        transition: 0.5s;
    }

    .android-content {
        padding-left: 0px;
        padding-right: 90px;
        position: relative;
        color: white;
        transition: 0.5s;
        opacity: 0;
    }

    .android-title {
        font-size: 40px;
        text-transform: capitalize;
        text-align: center;
        font-weight: 200;
    }

    .android-info {
        margin: 40px;
        font-size: 15px;
        line-height: 30px;
        text-align: center;
    }

    .android-btn-grp {
        display: grid;
        margin-left: 120px;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    }

    .android-btn {
        height: 40px;
        font-size: 18px;
        border: none;
        background: #000;
        color: #fff;
        cursor: pointer;
    }

    .android-btn.live {
        background: none;
        border: 2px solid #fff;
    }

    .android-btn.github {
        background: none;
        border: 2px solid #fff;
    }

    .android-card:hover .android-img {
        filter: blur(20px);
    }

    .android-card:hover .android-content {
        opacity: 1;
    }

    footer {
        margin-top: 100px;
    }
</style>
