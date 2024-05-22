<template>
    <footer>
        <section class="container-fluid bg-dark text-light">
            <div class="row justify-content-md-center">
                <div class="col-12 col-lg-6 text-center">
                    <div class="row justify-content-md-center">
                        <div class="col-12 col-lg-6 text-center">
                            <h2>Social Media</h2>
                            <a href="https://www.instagram.com/ftcstanislas/" class="btn btn-instagram text-light mx-1"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                            <a href="https://www.tiktok.com/@stanislasftc_" class="btn btn-fullblack text-light mx-1"><font-awesome-icon :icon="['fab', 'tiktok']" /></a>
                            <a href="https://github.com/ftcstanislas/" class="btn btn-github text-light mx-1"><font-awesome-icon :icon="['fab', 'github']" /></a>
                            <a href="https://www.youtube.com/channel/UCDQMt_bek-bs31V_Nj-XtUw" class="btn btn-youtube text-light mx-1"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
                        </div>
                        <div class="col-12 col-lg-6 text-center mt-3 mt-lg-0">
                            <h2>Contact</h2>
                            <a href="mailto:ftcscw@gmail.com" class="btn btn-primary text-light mt-2" ><font-awesome-icon :icon="['fas', 'envelope']" class="pe-3" />ftcscw@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="lower" class="container-fluid text-light bg-secondary">
            <div class="row justify-content-md-start">
                <div class="col-6 col-lg-4 text-start ps-5">
                    <!-- <a id="host" href="https://www.webleon.nl/" class="btn text-light">Site hosting provided by our friends over at <span style="text-decoration:underline">Webleon</span></a> -->
                    <a id="host" href="https://www.webleon.nl/" class="btn text-light d-none d-xl-block"><span>Site hosting provided by our friends at </span> <img src="../assets/webleon-crop.png" alt="webleon"/></a>
                    <a id="host" href="https://www.webleon.nl/" class="btn text-light d-none d-md-block d-xl-none"><span>Site hosting provided by </span> <img src="../assets/webleon-crop.png" alt="webleon"/></a>
                    <a id="host" href="https://www.webleon.nl/" class="btn text-light d-block d-md-none"><span>Hosted by </span> <img src="../assets/webleon-crop.png" alt="webleon"/></a>
                </div>
                <div class="col-6 col-lg-8 text-start pe-5">
                    <button class="btn btn-primary text-light" style="float:right;" @click="moveUp"><i class="bi bi-chevron-up"></i></button>
                </div>
            </div>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    setup() {
        const moveUp = () => {
            window.scrollTo(0, 0);
        }

        return { moveUp }
    }
}
</script>

<style scoped>
.container-fluid {
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100%;
}

#lower {
    padding-top: 10px !important;
    padding-bottom: 10px !important;
}

#mail {
    background-color: rgba(0,0,0,0.1);
}

#host:focus {
    outline: none;
    box-shadow: none;
}

#host a > img, #host a > span {
    display: inline-block;
}

#host img {
    height: 30px;
}
</style>