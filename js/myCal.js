class MyCal
{
    static buildCalendar(tbodyElem)
    {
        return MyCal.createDomElements(MyCal.getDays(), MyCal.dayOfWeek() - 1, tbodyElem);
    }

    static dayOfWeek()
    {
        return new Date().getDay();
    }

    static getDays()
    {
        let date = new Date();
        let days = [];
        let dayOfWeek = date.getDay();
        let i = dayOfWeek;
        let count = 0;

        // fill in today and days before today
        while (i > 0)
            days[--i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - count++).getDate();

        i = dayOfWeek;
        count = 0;

        // fill in days after today
        while (count < 28 - dayOfWeek)
            days[i++] = new Date(date.getFullYear(), date.getMonth(), date.getDate() + ++count).getDate();
        return days;
    }

    static createDomElements(days, todayDayOfWeek, tbody)
    {
        let count = 0;
        for (let i = 0; i < 4; i++)
        {
            let row = document.createElement('tr');
            tbody.appendChild(row);
            for (let j = 0; j < 7; j++)
            {
                let cell = document.createElement('td');
                if (count === todayDayOfWeek)
                    cell.className = 'today';
                cell.innerHTML = days[count++];
                tbody.appendChild(cell);
            }
        }
    }
}