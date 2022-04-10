<template>
    <section id="hai">
        <span class="img-container">
            <img
                src="../assets/JPEG_20220318_171748_8090_.png"
                alt="Muhammad Reda"
                width="300"
                height="300"
                class="pict"
            />
            <p>
                Hai, saya <strong>Muhammad Reda</strong>, saya mahasiswa UIN
                SUSKA RIAU
            </p>
            <br />
            <p class="p2">
                Ini adalah SPA web pertama saya yang ditujukan untuk menjadi
                tugas matakuliah Pemrograman Web. Sejak kecil saya besar dan
                tumbuh di Pujud, Rokan Hilir, Riau. Kini sekarang saya menempuh
                pendidikan di Pekanbaru tepatnya di Universitas Islam Negeri
                Sultan Syarif Kasim Riau.
            </p>
        </span>

        <table
            class="table thead-light"
            style="width: 70%"
            align="center"
            border="2px solid white"
        >
            <thead class="tatas">
                <tr>
                    <th>#</th>
                    <th>Pendidikan</th>
                    <th>Lokasi</th>
                </tr>
            </thead>

            <tbody class="tatas1">
                <tr>
                    <th scope="row">1</th>
                    <td>UIN SUSKA RIAU</td>
                    <td>Pekanbaru</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>SMA NEGERI 1 PUJUD</td>
                    <td>Pujud, Rokan Hilir</td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td>SMP NEGERI 1 PUJUD</td>
                    <td>Pujud, Rokan Hilir</td>
                </tr>

                <tr>
                    <th scope="row">4</th>
                    <td>SD NEGERI 004 PUJUD</td>
                    <td>Pujud, Rokan Hilir</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<style>
    footer {
        text-align: center;
    }
    .img-container {
        text-align: left;
        display: block;
        margin-top: 40px;
        margin-left: 80px;
    }

    .p2 {
        text-align: center;
        margin-bottom: 50px;
        width: 80rem;
    }
    p {
        text-align: center;
        color: aliceblue;
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
</style>
