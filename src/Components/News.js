import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
    constructor() {
        super();
        console.log("Hello, I am a constructor from the news component");
        this.state = {};
    }

    render() {
        const articles = [
            {
              "source": {
                "id": "cnn",
                "name": "CNN"
              },
              "author": "Alayna Treene, Jack Forrest",
              "title": "Melania Trump’s mother has died - CNN",
              "description": "Amalija Knavs, the mother of former first lady Melania Trump, has died, Trump posted on her social media accounts.",
              "url": "https://www.cnn.com/2024/01/09/politics/melania-trump-mother-dead-amalija-knavs/index.html",
              "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240109220911-01-amalija-knavs.jpg?c=16x9&q=w_800,c_fill",
              "publishedAt": "2024-01-10T04:33:00Z",
              "content": "Amalija Knavs, the mother of former first lady Melania Trump, has died, Trump posted on her social media accounts.\r\nAmalija Knavs was a strong woman who always carried herself with grace, warmth, and… [+1758 chars]"
            },
            {
              "source": {
                "id": "cnn",
                "name": "CNN"
              },
              "author": "Oren Liebermann",
              "title": "US Navy shoots down barrage of Houthi missiles and drones launched from Yemen over Red Sea, US Central Command says - CNN",
              "description": "The US Navy shot down 21 Houthi missiles and drones launched from Yemen, according to a statement from US Central Command, in one of the largest Houthi attacks to take place in the Red Sea in recent months.",
              "url": "https://www.cnn.com/2024/01/09/politics/us-navy-houthi-missiles-drones-red-sea/index.html",
              "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240109200130-houthi-fighters-galazy-leader-cargo-yemen-11202023.jpg?c=16x9&q=w_800,c_fill",
              "publishedAt": "2024-01-10T04:08:00Z",
              "content": "The US Navy shot down 21 Houthi missiles and drones launched from Yemen, according to a statement from US Central Command, in one of the largest Houthi attacks to take place in the Red Sea in recent … [+3220 chars]"
            },
            {
              "source": {
                "id": "associated-press",
                "name": "Associated Press"
              },
              "author": "GONZALO SOLANO, ALLEN PANCHANA",
              "title": "Armed men storm an Ecuador TV studio during a live broadcast as attacks in the country escalate - The Associated Press",
              "description": "Authorities in Ecuador say masked men broke onto the set of a public television channel in Ecuador waving guns and explosives during a live broadcast, prompting the president to issued a decree declaring that the violence-plagued country had entered an “inter…",
              "url": "https://apnews.com/article/ecuador-violence-attacks-emergency-gangs-prison-12f01b66f3fd523fcdca04e729aa27af",
              "urlToImage": "https://dims.apnews.com/dims4/default/18e7cbf/2147483647/strip/true/crop/4176x2349+0+218/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F7c%2Fe8%2Fe62e269294b5b50c2639e2ee5464%2F465998eeea1840c78fd0c6321cab00f4",
              "publishedAt": "2024-01-10T01:59:42Z",
              "content": "GUAYAQUIL, Ecuador (AP) Masked men broke onto the set of a public television channel in Ecuador waving guns and explosives during a live broadcast Tuesday, and the president issued a decree declaring… [+6343 chars]"
            },
            {
              "source": {
                "id": "cbs-news",
                "name": "CBS News"
              },
              "author": "Eleanor Watson, Caitlin Yilek",
              "title": "Defense Secretary Lloyd Austin was hospitalized for infection related to surgery for prostate cancer, Pentagon says - CBS News",
              "description": "A statement provides new details amid a growing controversy over the Pentagon's failure to notify the White House about his hospitalization.",
              "url": "https://www.cbsnews.com/news/lloyd-austin-defense-secretary-prostate-cancer-hospitalization/",
              "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/01/09/2047cc3a-8205-4a31-b987-dea7f6ce3f20/thumbnail/1200x630g2/8980db6fcbc234b219cb7ed6ff13dcf5/gettyimages-1857905595.jpg?v=3638d056f7798fc8425d74271bc0b398",
              "publishedAt": "2024-01-10T00:42:00Z",
              "content": "Washington — Defense Secretary Lloyd Austin was hospitalized to treat an infection that was related to earlier surgery for prostate cancer, his doctors said in a statement released by the Pentagon on… [+5838 chars]"
            },
            {
              "source": {
                "id": "fox-news",
                "name": "Fox News"
              },
              "author": "Christine Rousselle, Melissa Rudy",
              "title": "Screen time for kids under age 2 is linked to sensory differences in toddlerhood, new study finds - Fox News",
              "description": "Screen time for children under 2 years of age could result in \"atypical sensory\" behaviors and other processing issues, a study from Drexel University suggests.",
              "url": "https://www.foxnews.com/health/study-screen-time-kids-under-2-linked-sensory-differences-toddlerhood-study",
              "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/01/iStock-1477408669.jpg",
              "publishedAt": "2024-01-10T00:37:00Z",
              "content": "Read this article for free!\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you are agreeing… [+6353 chars]"
            },
            {
              "source": {
                "id": "engadget",
                "name": "Engadget"
              },
              "author": "Terrence O'Brien",
              "title": "Rabbit R1 is an adorable AI-powered assistant co-designed by Teenage Engineering - Engadget",
              "description": "The Rabbit R1 is a dedicated virtual assistant device with Teenage Engineering design DNA.",
              "url": "https://www.engadget.com/rabbit-r1-is-an-adorable-ai-powered-assistant-co-designed-by-teenage-engineering-001051537.html",
              "urlToImage": "https://s.yimg.com/ny/api/res/1.2/dpi41XT_kHHCKAU.jJb0MQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MTY-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/9384dc70-af4b-11ee-bfff-d75f8d3a5d57",
              "publishedAt": "2024-01-10T00:10:00Z",
              "content": "Yes, you probably already have a virtual assistant in your pocket on your phone. Heck, if you're reading Engadget, I'm willing to bet you've got at least one smart speaker floating around your home a… [+3166 chars]"
            },
            {
              "source": {
                "id": "the-verge",
                "name": "The Verge"
              },
              "author": "Andrew J. Hawkins",
              "title": "Intel: “We are bringing the AI PC to the car” - The Verge",
              "description": "Intel wants to put AI-enhanced chips in cars to improve voice assistants and active safety features. The first company to receive these new chips will be Zeekr.",
              "url": "https://www.theverge.com/2024/1/9/24026990/intel-auto-car-ai-pc-soc-sdv-zeekr-ces",
              "urlToImage": "https://cdn.vox-cdn.com/thumbor/LhIXR6KH7omUXgM98wFyV7bt-tc=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22248421/acastro_210120_1777_intel_0002.jpg",
              "publishedAt": "2024-01-09T23:15:00Z",
              "content": "Intel: We are bringing the AI PC to the car\r\nIntel: We are bringing the AI PC to the car\r\n / The chip company is doubling down on its auto business, introducing a new AI-enhanced system-on-a-chip for… [+5112 chars]"
            },
            {
              "source": {
                "id": "cbs-news",
                "name": "CBS News"
              },
              "author": "William Harwood",
              "title": "NASA delays first Artemis astronaut flight to late 2025, moon landing to 2026 - CBS News",
              "description": "NASA says the delays in plans will allow time to solve technical problems and to carry out flight tests of SpaceX's Starship moon lander.",
              "url": "https://www.cbsnews.com/news/nasa-delays-first-artemis-astronaut-flight-to-late-2025-moon-landing-to-2026/",
              "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/01/09/fc15ac38-dd71-4575-b139-081ba3761752/thumbnail/1200x630/3754c310a0455f003aaa99435244d3c7/010924-artemis2-crew.jpg?v=3638d056f7798fc8425d74271bc0b398",
              "publishedAt": "2024-01-09T22:26:00Z",
              "content": "NASA's first crewed Artemis mission, a flight to send four astronauts on a voyage around the moon and back, is being delayed nearly a year, from late 2024 to at least September 2025, NASA announced T… [+7423 chars]"
            }
          ];

        return (
            <div className='container'>
                <h3>Cricket News</h3>
                <div className="row">
                    {articles.map((article, index) => (
                        <div className="col-md-4" key={index}>
                            <NewsItem
                                title={article.title}
                                description={article.description}
                                imageUrl={article.urlToImage}
                                readMore="Read more"
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
