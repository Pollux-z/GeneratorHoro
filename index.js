const wordHoroscope = [{
    horoscopes: "ARIES",
    weeklyLove: "With the new moon in Pisces and Venus entering your sign on the twentieth",
    weeklyWork: "What dreams or networking opportunities should you focus on throughout your workweek",
    weeklyDating: "You may have the impulse to be confident and say what you mean on Monday",
},
{
    horoscopes: "TAURUS",
    weeklyLove: "The week kicks off with the new moon in Pisces activating the sector of your chart that rules friendships",
    weeklyWork: "Get ready for a professionally empowering week",
    weeklyDating: "This week is about strategy, and your friends are good sources of advice these days",
},
{
    horoscopes: "GEMINI",
    weeklyLove: "You'll likely feel unsure about the future and how deeply you want to commit to someone during the first part",
    weeklyWork: "Get ready for a professionally progressive week, Gemini! You have the power to invest your time, energy, and resources",
    weeklyDating: "You would like to spend Monday thinking about that person you saw the other day, but there is too much going on at work to be daydreaming",
},
{
    horoscopes: "CANCER",
    weeklyLove: "Speaking your truth is sexy, dear crab, especially if you can do so artistically.",
    weeklyWork: "Where will your career go, Cancer? Keep an open mind about how much your professional journey could be transformed",
    weeklyDating: "The rules don't apply to you early this week.",
},
{
    horoscopes: "LEO",
    weeklyLove: "You'll feel wild, free, and creative on the twentieth",
    weeklyWork: "Make the most of your work life, Leo. At the beginning of your workweek",
    weeklyDating: "Just because someone seems impressive doesn't mean that they're actually all that impressive.",
},
{
    horoscopes: "VIRGO",
    weeklyLove: "You expect people to stand by their word, dear Virgo",
    weeklyWork: "Put your needs first throughout this workweek, Virgo",
    weeklyDating: "Why be critical of others when you can be sweet and understanding? It's okay to let good friends make small mistakes.",
},
{
    horoscopes: "LIBRA",
    weeklyLove: "With your ruling planet, Venus entering Aries on the twentieth, things are about to get extra spicy in your love life",
    weeklyWork: "Focus on committing to a schedule that allows you to enjoy your work life, Libra.",
    weeklyDating: "When someone gorgeous interrupts your routine on Monday, two thoughts could cross your mind. One, how exciting!",
},
{
    horoscopes: "SCORPIO",
    weeklyLove: "With Pisces season in full swing, it'll be easy for you to prioritize your needs over others right now — and you should!",
    weeklyWork: "Explore your creative options at work, Scorpio.",
    weeklyDating: "Ah, romance. And everything else that comes with it: beauty, creativity, delicious food, delicious interpersonal mystery.",
},
{
    horoscopes: "SAGITTARIUS",
    weeklyLove: "The twentieth will be an important day for you, as Venus enters the flirty and sensual part of your chart.",
    weeklyWork: "Make the most of your workweek, Sagittarius! At the beginning of your workweek",
    weeklyDating: "Short of being shot out of a cannon, there's not really a lot that could shake you awake on Monday.",
},
{
    horoscopes: "CAPRICORN",
    weeklyLove: "With Venus entering Aries on the twentieth, matters of the heart should be a priority over the next few weeks.",
    weeklyWork: "What will you value throughout your workweek, Capricorn? Something may come up in conversations fairly early on in your workweek",
    weeklyDating: "The deal is you're a great writer, and if you put how you're feeling in writing you'll be able to come across exactly the way you want to.",
},
{
    horoscopes: "AQUARIUS",
    weeklyLove: "You'll be in an introspective mood on the twentieth, as the new moon and Venus’s entrance into Aries make you extra pensive.",
    weeklyWork: "You might feel like you are the talk of the town throughout your workweek, Aquarius. Beginning on Sunday, February 19,",
    weeklyDating: "If you had all the money in the world, you'd certainly put it to better use than a lot of the people out there who are swimming in cash",
},
{
    horoscopes: "PISCES",
    weeklyLove: "This celestial placement of the new moon aligning with your sign and Venus entering Aries on the twentieth is perfect for communicating with the universe",
    weeklyWork: "Connect with coworkers from all over, Pisces.",
    weeklyDating: "Do yourself a favor on Monday.",
},
]

const randomHoroscope = () => {
    let randomNumber = Math.floor(Math.random() * 12);
    return console.log(`You horoscope >
    Love weekly is : ${wordHoroscope[randomNumber].weeklyLove}, 
    Work Weekly is : ${wordHoroscope[randomNumber].weeklyWork} , 
    Dating weekly is : ${wordHoroscope[randomNumber].weeklyDating}`);

}

randomHoroscope();