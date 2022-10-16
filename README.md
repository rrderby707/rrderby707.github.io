Website for Resurrection Roller Derby. Created and administered by Casey Lewiston/Shredinger, admin@rrderby.org. See below for use notes. This is built using Gatsby and a handful of dependencies, with data from Google Calendar API, Contentful and internal files.

<h2>Calendar Module</h2>

The calendar module updates from the public Google Calendar. This is updated dynamically, not just at build time. Currently, all items with 'game' in the title and all items with the word "list" in the description will be displayed. Only events from the current year are shown. In the future tags will be added for different types of events.

For games, use the title "Home Game Vs. Team" or "Away Game vs. Team". This module will expect that formatting, and pulls the team name only. You can place ticket links in the description to have the link generated on the site. Anything other than game, if 'list' is in the description, will be shown using its full event name. For recurring events, only the first event should include the keyword to prevent repeats.

<h2>Contentful</h2>

Sponsors are sourced from Contentful. Anyone associated with this department should make an account there and be added. The content type 'Sponsors' does what you need for this. A new build will have to be generated to see the results of this.

No other data is currently used from Contentful. This is planned.

<h2>Deployment</h2>

This is now being hosted on GitHub Pages, with builds deployed to the /docs folder. GitHub requires that to be the directory name but, as far as I know, Gatsby only builds to /public. So I manually copied the deployment to /docs and committed it for updates. I'm sure that step could be automated.
