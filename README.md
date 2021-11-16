# Viget Front-End Developer Buildout Exercise

The purpose of this challenge is to evaluate your combined knowledge of markup (HTML), styling (CSS), and behavior (JavaScript) — the core skills for every front-end developer!

## Instructions

### General

- Build out the design to the best of your ability. If you're unable to complete any portion of the buildout for whatever reason, list what you weren't able to get to and how you might have approached it.
- Prioritize showing us _your_ code over showing us how you can use a third-party framework or library.
- Use the included `ANSWERS.md` file for your explanations. Feel free to also use code comments to describe what you're doing — we'll be looking!
- You may take as long to complete the challenge as you need. We recommend that you restrict yourself to about 4 hours and use this limitation to help you make decisions about what to focus on. In your answers, record how long you took to complete the build and explain how you prioritized your work.
- Use your preferred file structure, CSS conventions, and JavaScript syntax. Explain your decisions.
- Use any build tools you're comfortable with and explain your preference for that toolset. If you use a compiler, be sure to include the pre-compiled code (e.g. `.scss` files) in the package you send us.
- Your buildout only needs to work in the current version of Chrome but explain browser incompatibilities your solution might have.
- Like in front-end development, there's no one right way to complete this exercise! What we're looking for is your ability to accurately build the design, make decisions on how to adapt it for small screens, and your attention to writing clean modern code.

### Choose Your Buildout Challenge

This package contains two variations of the buildout. They both contain a feature that requires JavaScript to work. Choose the one that best suits your area of focus.

#### UI/Interface Focus: Tabbed Content

- Use `comp-tabs.png` for your build.
- Clicking a tab should change the content in the space occupied by the "Te pri legimus dissentiet..." text in the design.
- Use the text included below for the content of the tab containers.

#### Application Development Focus: API Interaction

- Use `comp-api.png` for your build.
- Use any JavaScript library of your choosing (or none).
- Load the JSON data from `data/results.json` or `https://api.npoint.io/9a0d347ec5f48c494fc0` to populate the article list.
- Display the first four results from the data set.
- Create links to load the rest of the results in sets of four. Depending on your approach and library chosen, you may break up the `results.json` file into individual files to simulate individual API calls (e.g. `results-1.json`, `results-2.json`, etc.).

### Styling

- In this exercise, a responsive design is missing! The included design comp is for larger screens but the buildout needs to work down to 320px wide (iPhone 5/SE). You are responsible for adapting the design to work on smaller screens.

### Extras (if you have time)

- Be creative with hover and transition animations.
- Ensure that your work is accessible to people using keyboards and screen readers.
- Are there any performance concerns with this design? What techniques could help improve the loading or perceived loading experience?

### When You're Finished

- Send the completed challenge back to us.
- Because Gmail [blocks JavaScript file attachments](https://www.engadget.com/2017/01/26/gmail-block-javascript-attachments/), it's recommended that you upload the package to Google Drive or another file sharing service and send a link.

## Assets

All necessary assets have been extracted and listed below so you can build out the design with minimal software requirements.

Feel free to manipulate the images in any way you need to complete the build.

### Images

- `images/hero.jpg` is for the main hero/header image.
- `images/article/*.jpg` are the article images used for the API buildout challenge.

### Data (if applicable)

- `data/results.json` is the JSON file that needs to be loaded for the API buildout challenge.

### Fonts

- Family: [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans)
- Weights: 300, 400, 700

### Colors

- Light Blue: ![#f03c15](https://placehold.it/15/1395ba/000000?text=+) #1395ba;
- Dark Blue: ![#f03c15](https://placehold.it/15/141e3c/000000?text=+) #141e3c;
- Lighter Gray: ![#f03c15](https://placehold.it/15/fafafa/000000?text=+) #fafafa;
- Light Gray: ![#f03c15](https://placehold.it/15/e9e9e9/000000?text=+) #e9e9e9;
- Gray: ![#f03c15](https://placehold.it/15/666666/000000?text=+) #666;
- Dark Gray: ![#f03c15](https://placehold.it/15/333333/000000?text=+) #333;
- Orange: ![#f03c15](https://placehold.it/15/e57201/000000?text=+) #e57201;

### Content

Text used in the comp for easy copy/paste.

#### Header

Title:
Front-End Development

Text:
Engineering with heart. From the beginning, we’ve believed that software has the power to change the world. We work with small startups and global brands alike, combining two decades of agile development practice with strategic thinking to make clients’ digital dreams a reality.

Button:
Recent Work

#### Tabs (if applicable)

##### Tab 1

Link:
Client-Side Apps

Text:
Powering modern web experiences. Client-side apps bring the productivity-enhancing and user-pleasing experience of native software to the web. If your web app needs an exceptionally fluid and interactive interface, look no further.

Possit quaestio euripidis pri eu, ei quod dico mel. Mei diceret placerat dissentiunt cu, pri debitis nostrum in. Usu ea tritani tibique, ne vel nulla oporteat facilisis. Magna utamur rationibus at mei, cum ei aliquip dissentiet. Dicta viris accommodare at cum.

##### Tab 2

Link:
Craft CMS

Text:
Craft is a flexible and practical content management system — easy to use for members of any team, from designers to developers to content producers. At Viget, we’ve been using Craft to create usable and accessible websites since its inception. We’ve authored numerous plugins and are committed to sharing our knowledge with the development community.

##### Tab 3

Link:
Mobile Apps

Text:
We create polished and functional iOS & Android mobile apps for clients. These mobile apps are products of careful planning, strong design, and agile development. Using technologies like React Native, we create powerful mobile experiences across platforms.

Ne conceptam constituto sea. Ut nec possim iriure, cu duo ferri ceteros torquatos. Nam amet alienum ex. In odio euripidis vis. An vel liber consul.

Duo virtute nostrud persecuti ut. Mea case perpetua voluptatibus ea, ei vis illum definitionem. An mea dicant apeirian dissentias, admodum habemus mel ne. Eos at vitae delicatissimi, prompta labores tibique ius at. Ipsum viris eos ea.

##### Tab 4

Link:
React

Text:
We use React to build rich, interaction-driven experiences on the web. Since 2013, Viget has been using React as our JavaScript (JS) library of choice for building user interfaces due to its component-based design, outstanding performance, and improved developer productivity. In addition to powering many immersive, interactive experiences across our websites and web applications, we've shared a number of React tools and components with the community.

#### CTAs (Calls to Action)

Heading:
Other Capabilities

##### CTA 1

Title:
Creative

Lede:
Combining style with substance.

Text:
The best digital experiences are ones that go beyond being merely functional and efficient. To draw interest with stunning visuals, provide interactive elements, and tell a compelling story is to create an experience worth revisiting.

##### CTA 2

Title:
User Experience

Lede:
Delightfully usable.

Text:
Our user-centered approach starts with discovering the perceptions, behaviors, and goals of your customers and visitors. We blend this knowledge with both data analysis and an understanding of your business to engage users and get results.

##### CTA 3

Title:
Data and Analytics

Lede:
Guided by data.

Text:
We make strategic, data-informed decisions that improve the performance of sites, products, and marketing efforts. Through our data collection and interpretation, we’ll show you how to better drive and convert visitors more efficiently with your marketing budget.

#### Footer

© 2019 All rights reserved.
