<template>
    <section class="android-section">
        <h1 class="android-heading">
            Some of my <strong>Android</strong> college task
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                    <div class="android-btn-grp">
                        <button class="android-btn github">Github repo</button>
                        <button class="android-btn live">See live</button>
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
        grid-gap: 200px;
    }

    .android-card {
        height: 500px;
        position: relative;
        margin-left: 70px;
        margin-top: 40px;
    }

    .android-img {
        position: absolute;
        top: 0;
        left: 0;
        object-fit: cover;
        transition: 0.5s;
    }

    .android-content {
        padding: 40px;
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

    .android-card:hover .android-img {
        filter: blur(20px);
    }

    .android-card:hover .android-content {
        opacity: 1;
    }
</style>
