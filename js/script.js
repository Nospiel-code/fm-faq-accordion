let detailsGroup = document.querySelectorAll("details")

detailsGroup.forEach((details) => {
    let detailsElement = details
    let detailsSummary = details.querySelector(".details-summary")
    let detailsContent = details.querySelector(".details-content")

    details.style.transitionDuration = "300ms"

    // if
    if (!details.hasAttribute("open")) {
        details.style.height = detailsSummary.clientHeight + "px"
    } else {
        details.style.height =
            details.clientHeight + detailsContent.clientHeight + "px"
    }

    detailsElement.addEventListener("click", (e) => {
        if (e.target.classList.contains("details-summary")) {
            e.preventDefault()

            const detail = e.target.parentNode

            detailsGroup.forEach((otherDetail) => {
                if (
                    otherDetail !== detail &&
                    otherDetail.hasAttribute("open")
                ) {
                    close(otherDetail)
                }
            })

            if (!detail.hasAttribute("open")) {
                open(detail)
            } else {
                close(detail)
            }
        }
    })

    function open(detail) {
        const toggleSummary = detail.querySelector(".details-summary")
        const content = detail.querySelector(".details-content")
        const toggleHeight = toggleSummary.clientHeight

        toggleSummary.classList.add("font-bold")
        content.classList.add("pb-2")
        toggleSummary.classList.add("text-very-dark-desaturated-blue")

        detail.setAttribute("open", true)
        const contentHeight = content.clientHeight

        detail.removeAttribute("open")

        detail.style.height = toggleHeight + contentHeight + "px"
        detail.setAttribute("open", true)
    }

    function close(detail) {
        const toggleSummary = detail.querySelector(".details-summary")
        const content = detail.querySelector(".details-content")
        const toggleHeight = toggleSummary.clientHeight

        toggleSummary.classList.remove("font-bold")
        content.classList.remove("pb-2")
        toggleSummary.classList.remove("text-very-dark-desaturated-blue")

        detail.style.height = toggleHeight + "px"

        setTimeout(() => {
            detail.removeAttribute("open")
        }, 300)
    }
})