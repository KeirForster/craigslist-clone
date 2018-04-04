onload = function() {
    let linksToDisableSelector = `.page-container a, .page-container h5, .wrapper footer .cl-footer a`;
    let linksToEnableSelector = `.page-container #left-bar #logo a, 
                .page-container #left-bar #postLinks a,
                .page-container #center .content .content-center-col .for-sale a`;
    let disabledLinksSelector = `.wrapper a.disabled`;

    disableHomePageLinks();
    buildHomepageCalendar();

    function disableHomePageLinks()
    {
        addDisableClassToLinks();
        disableLinksOnClick();
        disableLanguageSelect();
        addHrefToEnabledLinks();
    }

    function addDisableClassToLinks()
    {
        let disabledElems = document.querySelectorAll(linksToDisableSelector);
        let enabledElems = document.querySelectorAll(linksToEnableSelector);

        // disable all links
        disabledElems.forEach((elem) =>
        {
            elem.classList.add('disabled');
        });
        // enable specified links
        enabledElems.forEach((elem) =>
        {
            elem.classList.remove('disabled');
        });
    }

    function disableLinksOnClick()
    {
        let disabledElems = document.querySelectorAll(disabledLinksSelector);
        disabledElems.forEach((elem) =>
        {
            elem.onclick = (e) => { e.preventDefault(); };
        });
    }

    function disableLanguageSelect()
    {
        let languageSelElem = document.querySelector('.page-container #right-bar #langlinks select');
        languageSelElem.setAttribute('disabled', '')
    }

    function addHrefToEnabledLinks()
    {
        let enabledLinkElems = document.querySelectorAll(linksToEnableSelector);
        let postToClassifieldElem = document.querySelector('.page-container #left-bar #postLinks li:nth-child(1) a');

        enabledLinkElems.forEach((elem) =>
        {
            elem.href = '#';
        });

        postToClassifieldElem.href = 'app/post.php';
    }

    function buildHomepageCalendar()
    {
        MyCal.buildCalendar(document.querySelector('.page-container #left-bar .calendar tbody'));
    }
};