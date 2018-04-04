class DisableLinks
{
    static getLinksToDisableSelector()
    {
        return `.wrapper a`;
    }

    static getDisabledLinksSelector()
    {
        return `.wrapper a.disabled`;
    }

    static disablePostTypePageLinks()
    {
        DisableLinks.addDisableClassToLinks();
        DisableLinks.disableLinksOnClick();
    }

    static addDisableClassToLinks()
    {
        let disabledElems = document.querySelectorAll(DisableLinks.getLinksToDisableSelector());
        let enabledElems = document.querySelectorAll(DisableLinks.getLinksToDisableSelector());

        // disable all links
        disabledElems.forEach((elem) =>
        {
            elem.classList.add('disabled');
        });
        // enable specified links
        enabledElems.forEach((elem) =>
        {
            if (elem.innerHTML === 'for sale by owner' || elem.innerHTML === 'for sale by dealer')
                elem.classList.remove('disabled');
            else
            {
                elem.removeAttribute('href');
                elem.removeAttribute('ng-href');
            }
        });
    }

    static disableLinksOnClick()
    {
        let disabledElems = document.querySelectorAll(DisableLinks.getDisabledLinksSelector());
        disabledElems.forEach((elem) =>
        {
            elem.onclick = (e) => { e.preventDefault(); };
        });
    }
}