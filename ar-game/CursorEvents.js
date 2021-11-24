AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { default: "", type: "string" }
    },
    init: function () {
        this.handleClickEvents();
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    handleClickEvents: function () {
        this.el.addEventListener("click", evt => {
            const table = document.querySelector("#table2")
            if (table) {
                console.log("done")
            }
        });
    },
    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseleave", () => {
            const table = document.querySelector("#table1")

        })
    },

    handleMouseLeaveEvents: function () {

    }
});