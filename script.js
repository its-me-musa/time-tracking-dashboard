document.addEventListener('DOMContentLoaded', () => {
    const daily = document.querySelector('.daily-timeframe')
    const weekly = document.querySelector('.weekly-timeframe')
    const monthly = document.querySelector('.monthly-timeframe')

    const workDetails = document.querySelector('.work-details')
    const playDetails = document.querySelector('.play-details')
    const studyDetails = document.querySelector('.study-details')
    const exerciseDetails = document.querySelector('.exercise-details')
    const socialDetails = document.querySelector('.social-details')
    const selfCareDetails = document.querySelector('.self-care-details')

    // set default timeframe to weekly
    let timeframe = 'weekly'

    function setData() {
        fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
            const work = data[0]
            const play = data[1]
            const study = data[2]
            const exercise = data[3]
            const social = data[4]
            const selfCare = data[5]

            if (timeframe == 'daily') {
                monthly.classList.remove('show')
                weekly.classList.remove('show')
                daily.classList.add('show')

                workDetails.querySelector('.current').innerHTML = work.timeframes.daily.current + 'hrs'
                workDetails.querySelector('.previous').innerHTML = 'Yesterday - ' + work.timeframes.daily.previous + 'hrs'

                playDetails.querySelector('.current').innerHTML = play.timeframes.daily.current + 'hrs'
                playDetails.querySelector('.previous').innerHTML = 'Yesterday - ' + play.timeframes.daily.previous + 'hrs'

                studyDetails.querySelector('.current').innerHTML = study.timeframes.daily.current + 'hrs'
                studyDetails.querySelector('.previous').innerHTML = 'Yesterday - ' + study.timeframes.daily.previous + 'hrs'

                exerciseDetails.querySelector('.current').innerHTML = exercise.timeframes.daily.current + 'hrs'
                exerciseDetails.querySelector('.previous').innerHTML = 'Yesterday - ' + exercise.timeframes.daily.previous + 'hrs'

                socialDetails.querySelector('.current').innerHTML = social.timeframes.daily.current + 'hrs'
                socialDetails.querySelector('.previous').innerHTML = 'Yesterday - ' + social.timeframes.daily.previous + 'hrs'

                selfCareDetails.querySelector('.current').innerHTML = selfCare.timeframes.daily.current + 'hrs'
                selfCareDetails.querySelector('.previous').innerHTML = 'Yesterday - ' + work.timeframes.daily.previous + 'hrs'
            }


            else if (timeframe == 'weekly') {
                monthly.classList.remove('show')
                weekly.classList.add('show')
                daily.classList.remove('show')

                workDetails.querySelector('.current').innerHTML = work.timeframes.weekly.current + 'hrs'
                workDetails.querySelector('.previous').innerHTML = 'Last Week - ' + work.timeframes.weekly.previous + 'hrs'

                playDetails.querySelector('.current').innerHTML = play.timeframes.weekly.current + 'hrs'
                playDetails.querySelector('.previous').innerHTML = 'Last Week - ' + play.timeframes.weekly.previous + 'hrs'

                studyDetails.querySelector('.current').innerHTML = study.timeframes.weekly.current + 'hrs'
                studyDetails.querySelector('.previous').innerHTML = 'Last Week - ' + study.timeframes.weekly.previous + 'hrs'

                exerciseDetails.querySelector('.current').innerHTML = exercise.timeframes.weekly.current + 'hrs'
                exerciseDetails.querySelector('.previous').innerHTML = 'Last Week - ' + exercise.timeframes.weekly.previous + 'hrs'

                socialDetails.querySelector('.current').innerHTML = social.timeframes.weekly.current + 'hrs'
                socialDetails.querySelector('.previous').innerHTML = 'Last Week - ' + social.timeframes.weekly.previous + 'hrs'

                selfCareDetails.querySelector('.current').innerHTML = selfCare.timeframes.weekly.current + 'hrs'
                selfCareDetails.querySelector('.previous').innerHTML = 'Last Week - ' + work.timeframes.weekly.previous + 'hrs'
            }

            else if (timeframe == 'monthly') {
                monthly.classList.add('show')
                weekly.classList.remove('show')
                daily.classList.remove('show')
    
                workDetails.querySelector('.current').innerHTML = work.timeframes.monthly.current + 'hrs'
                workDetails.querySelector('.previous').innerHTML = 'Last Month - ' + work.timeframes.monthly.previous + 'hrs'

                playDetails.querySelector('.current').innerHTML = play.timeframes.monthly.current + 'hrs'
                playDetails.querySelector('.previous').innerHTML = 'Last Month - ' + play.timeframes.monthly.previous + 'hrs'

                studyDetails.querySelector('.current').innerHTML = study.timeframes.monthly.current + 'hrs'
                studyDetails.querySelector('.previous').innerHTML = 'Last Month - ' + study.timeframes.monthly.previous + 'hrs'

                exerciseDetails.querySelector('.current').innerHTML = exercise.timeframes.monthly.current + 'hrs'
                exerciseDetails.querySelector('.previous').innerHTML = 'Last Month - ' + exercise.timeframes.monthly.previous + 'hrs'

                socialDetails.querySelector('.current').innerHTML = social.timeframes.monthly.current + 'hrs'
                socialDetails.querySelector('.previous').innerHTML = 'Last Month - ' + social.timeframes.monthly.previous + 'hrs'

                selfCareDetails.querySelector('.current').innerHTML = selfCare.timeframes.monthly.current + 'hrs'
                selfCareDetails.querySelector('.previous').innerHTML = 'Last Month - ' + work.timeframes.monthly.previous + 'hrs'
            }
        })
    }

    setData()

    daily.addEventListener('click', function () {
        timeframe = 'daily'
        setData()
    }
    )


    weekly.addEventListener('click', function () {
        timeframe = 'weekly'
        setData()
    }
    )


    monthly.addEventListener('click', function () {
        timeframe = 'monthly'
        setData()
    }
    )
    }
)
