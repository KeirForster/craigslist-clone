(function() {
    disableHomePageLinks();
    buildHomepageCalendar();

    function disableHomePageLinks()
    {
        disableLinks();
        disableOnClick();
    }

    function disableLinks()
    {
        let disabledLinks = '.page-container a, .page-container h5';
        let enabledLinks = `.page-container #left-bar #logo a, 
            .page-container #left-bar #postLinks a,
            .page-container #center .content .content-center-col .for-sale a`;

        let disabledElems = document.querySelectorAll(disabledLinks);
        let enabledElems = document.querySelectorAll(enabledLinks);

        disabledElems.forEach((elem) =>
        {
            elem.classList.add('disabled');
        });
        enabledElems.forEach((elem) =>
        {
            elem.classList.remove('disabled');
        });
    }

    function disableOnClick()
    {
        let disabledLinks = document.querySelectorAll('.page-container a.disabled');
        disabledLinks.forEach((elem) =>
        {
            elem.onclick = (e) =>
            {
                e.preventDefault();
            };
        });
    }

    function buildHomepageCalendar()
    {
        MyCal.buildCalendar(document.querySelector('.page-container #left-bar .calendar tbody'));
    }
})();