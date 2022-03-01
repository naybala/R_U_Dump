const btn = document.querySelector(".btnNo");
const btnY = document.querySelector(".btnYes");
let btnOne = '';
btn.addEventListener("click", () => {
    btn.classList.add("one");
    const btnOne = document.querySelector(".btnNo.one");
    btnOne.addEventListener("click", () => {
        btn.classList.remove("one");
        btn.classList.add("two");
        const btnTwo = document.querySelector(".btnNo.two");
        btnTwo.addEventListener("click", () => {
            btn.classList.remove("two");
            btn.classList.add("three");
            const btnThree = document.querySelector(".btnNo.three");
            btnThree.addEventListener("click", () => {
                btn.classList.remove("three");
                btn.classList.add("four");
                const btnFour = document.querySelector(".btnNo.four");
                btnFour.addEventListener("click", () => {
                    btn.classList.remove("four");
                    btn.classList.add("restart");
                    const btnRestart = document.querySelector(".btnNo.restart");
                    btnRestart.addEventListener("click", () => {
                        location.reload();
                    });
                });
            });

        });
    });

});
btnY.addEventListener("click", () => {
    console.log("Hello");
    const pText = document.querySelector(".off");
    const pText1 = document.querySelector(".active");
    pText.style.display = "block";
    pText1.style.display = "none";
    btn.style.display = "none";
    btnY.style.display = "none";
});