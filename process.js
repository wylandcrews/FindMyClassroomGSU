function process() {
    var choice = document.myForm.bldg.value;
    if (choice == "Aderhold") {
        window.location.href = "aderhold.html";
    } else if (choice == "CLSO") {
        window.location.href = "clso.html";
    } else if (choice == "LANGDL") {
        window.location.href = "langdale.html";
    } else if (choice == "NSC") {
        window.location.href = "nsc.html";
    } else if (choice == "Petit") {
        window.location.href = "petit.html";
    } else if (choice == "Sparks") {
        window.location.href = "sparks.html";
    } else if (choice == "URBAN") {
        window.location.href = "urbanlife.html";
    }
    return false;
}
