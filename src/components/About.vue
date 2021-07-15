<template>
    <div class="aboutContainer">
        <p class="aboutTitle">About</p>
        <p class="aboutText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus qui, eveniet sunt, rerum ea porro soluta aperiam maiores
            deleniti unde aut ex voluptatum velit culpa optio laudantium
            similique commodi incidunt? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. <br />
            Repellendus qui, eveniet sunt, rerum ea porro soluta aperiam maiores
            deleniti unde aut ex voluptatum velit culpa optio laudantium
            similique commodi incidunt?
        </p>
        <ul class="socialMediaBox">
            <li>
                <a target="_blank" href="https://codepen.io/dgtgnd">
                    <img
                        class="codepenLogo"
                        src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png"
                        alt="codepen logo"
                    />
                </a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/RafaelOviedo">
                    <img
                        class="githubLogo"
                        src="https://pngimg.com/uploads/github/github_PNG58.png"
                        alt="github logo"
                    />
                </a>
            </li>
            <li>
                <a target="_blank" href="https://www.instagram.com/dgtgnd/">
                    <img
                        class="instagramLogo"
                        src="https://img.icons8.com/ios-glyphs/452/instagram-circle.png"
                        alt="instagram logo"
                    />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "About",
};
</script>

<style scoped>
.aboutContainer {
    position: absolute;
    left: -1%;
    display: flex;
    flex-direction: column;
    width: 101%;
    height: 92vh;
    font-size: 30px;
    background: black;
    color: white;
    overflow: hidden;
}

.aboutTitle {
    font-size: 70px;
    font-weight: bold;
    position: absolute;
    top: 8%;
    left: 20%;
}

.aboutText {
    font-size: 20px;
    position: absolute;
    top: 30%;
    left: 7%;
    margin-right: 10%;
}

.socialMediaBox {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    list-style-type: none;
    position: absolute;
    top: 70%;
    left: 24%;
}

.githubLogo,
.codepenLogo,
.instagramLogo {
    background: white;
    border-radius: 50%;
    width: 90px;
    height: 90px;
}
</style>
