<template>
    <!-- Foto-->
    <span class="img-container">
        <img
            src="../assets/JPEG_20220318_171748_8090_.png"
            alt="Muhammad Reda"
            width="300"
            height="300"
            class="pict"
        />
        <p class="Haii">
            Hai, saya <strong>Muhammad Reda</strong>, saya mahasiswa UIN SUSKA
            RIAU
        </p>
        <br />
        <div id="SPA">
            <p>
                Ini adalah SPA web pertama saya yang ditujukan untuk menjadi
                tugas matakuliah Pemrograman Web. Sejak kecil saya besar dan
                tumbuh di Pujud, Rokan Hilir, Riau. Kini sekarang saya menempuh
                pendidikan di Pekanbaru tepatnya di Universitas Islam Negeri
                Sultan Syarif Kasim Riau.
            </p>
        </div>
    </span>

    <!-- Bagian skill -->
    <div class="skill-section">
        <h1 class="heading">Skills</h1>

        <div class="skills-container">
            <div class="skill-card">
                <img src="../assets/html.png" class="skill-img" alt="" />
                <div class="skill-level">70%</div>
                <h1 class="skill-name">HTML</h1>
                <p class="skill-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem amet repellat libero maiores.
                </p>
            </div>

            <div class="skill-card">
                <img src="../assets/css.png" class="skill-img" alt="" />
                <div class="skill-level">70%</div>
                <h1 class="skill-name">CSS</h1>
                <p class="skill-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem amet repellat libero maiores.
                </p>
            </div>

            <div class="skill-card">
                <img src="../assets/js.png" class="skill-img" alt="" />
                <div class="skill-level">50%</div>
                <h1 class="skill-name">JS</h1>
                <p class="skill-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem amet repellat libero maiores.
                </p>
            </div>
        </div>
    </div>

    <!-- Bagian Education-->

    <div class="timeline">
        <h1 class="education-heading">Education and Experience</h1>

        <div class="card">
            <div class="card-body">
                <h1 class="card-title">2008-2014</h1>
                <p class="card-detail">
                    Bersekolah di Sekolah Dasar Negeri 004 Pujud (sekarang SDN
                    001 Tanjung Medan)
                </p>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h1 class="card-title">2014-2017</h1>
                <p class="card-detail">
                    Bersekolah di Sekolah Menengah Pertama 001 Pujud
                </p>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h1 class="card-title">2017-2020</h1>
                <p class="card-detail">
                    Bersekolah di Sekolah Menengah Atas 001 Pujud
                </p>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h1 class="card-title">2020-now</h1>
                <p class="card-detail">
                    Mengambil perkuliahan di Institut Teknologi Bandung dengan
                    mengambil prodi Teknik Informatika.
                </p>
            </div>
        </div>
    </div>
</template>

<style>
    .Haii {
        text-align: center;
        color: aliceblue;
    }
    .img-container {
        text-align: left;
        display: block;
        margin-top: 40px;
        margin-left: 80px;
    }

    #SPA {
        text-align: center;
        margin-bottom: 50px;
        width: 80rem;
        color: #fff;
    }

    .pict {
        float: center;
        margin: auto;
        display: block;
        margin-bottom: 30px;
    }

    .tatas {
        margin-top: 40px;
        text-align: center;
        font-size: 13pt;
        color: aliceblue;
    }

    .tatas1 {
        text-align: center;
        font-size: 13pt;
        color: aliceblue;
    }

    /*skills*/

    .skill-section {
        padding-top: 8f0px;
        position: relative;
        margin: 100px 0;
    }

    .heading {
        text-align: center;
        font-size: 60px;
        color: white;
        text-transform: capitalize;
        font-weight: 300;
        margin-bottom: 100px;
    }

    .skills-container {
        width: 95%;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 100px;
        color: #fff;
    }

    .skill-card {
        position: relative;
    }

    .skill-img {
        display: block;
        margin: auto;
        height: 200px;
    }

    .skill-name {
        font-size: 30px;
        font-weight: 300;
        text-align: center;
        text-transform: capitalize;
        margin: 30px 0 20px;
    }

    .skill-info {
        text-align: center;
        opacity: 0.5;
        font-size: 18px;
        line-height: 30px;
    }

    .skill-level {
        position: absolute;
        top: 20%;
        right: 0;
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        border-radius: 50%;
        border: 10px solid;
    }

    .skill-card:nth-child(1) .skill-level {
        border-color: #f18035;
        color: #f18035;
    }

    .skill-card:nth-child(2) .skill-level {
        border-color: #2c2cff;
        color: #2c2cff;
    }

    .skill-card:nth-child(3) .skill-level {
        border-color: #fdc137;
        color: #fdc137;
    }

    /* Education Timeline */

    .timeline {
        display: block;
        width: 80%;
        margin: 150px auto;
    }

    .timeline .education-heading {
        margin-bottom: 150px;
        color: white;
        text-align: center;
    }

    .card {
        width: 45%;
        padding: 30px;
        border-radius: 10px;
        color: white;
        display: block;
        margin: -80px 0;
        position: relative;
        background: rgb(41, 100, 239);
    }

    .card:nth-child(even) {
        margin-left: auto;
    }

    .card:nth-child(even)::before {
        content: "";
        position: absolute;
        left: -15%;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        border: 5px solid #191919;
        border-radius: 50%;
    }

    .card:nth-child(odd):before {
        content: "";
        position: absolute;
        right: -13%;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        border: 5px solid #191919;
        border-radius: 50%;
    }

    .card:nth-child(2),
    .card:nth-child(2)::before {
        background: red;
    }

    .card:nth-child(3),
    .card:nth-child(3)::before {
        background: orange;
    }

    .card:nth-child(4),
    .card:nth-child(4)::before {
        background: green;
    }

    .card:nth-child(5),
    .card:nth-child(5)::before {
        background: blue;
    }

    .card-title {
        font-size: 30px;
        font-weight: 300;
        margin-bottom: 20px;
    }
</style>
