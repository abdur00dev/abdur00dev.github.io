# Abdur Rahaman — Academic Website

This repository contains the source code for the personal academic website of **Abdur Rahaman**, PhD Research Scholar at the **Indian Institute of Technology Indore**.

**Live website:** https://abdur00dev.github.io/  
**Repository:** https://github.com/abdur00dev/abdur00dev.github.io

The website is a lightweight static site built with **HTML, CSS, and JavaScript** and is intended to present research interests, publications, education, awards, academic service, and contact information.

---

## Editing the Website

Most personal and research content is stored in:

```text
data/content.js
```

Edit that file to update:

- name, title, affiliation, email, and profile links
- biography and collaboration statement
- research interests and representative papers
- news and announcements
- selected and additional publications
- education
- awards and honors
- academic service and reviewing activities

The main page structure is in:

```text
index.html
```

Styling is controlled by:

```text
styles.css
```

Interactive rendering and page behavior are handled by:

```text
script.js
```

---

## Images and Files

Website images are stored under:

```text
assets/img/
```

Documents such as the CV may be stored under:

```text
assets/files/
```

The exact profile-image and CV paths are configured in `data/content.js`.

Publication thumbnails, figures, logos, and other visual assets should only be used when you have permission to use them or when their original source and ownership are properly acknowledged.

---

## Local Preview

You can preview the website locally by opening `index.html` directly in a browser.

For a more reliable local preview, run a small HTTP server from the project folder:

```bash
python -m http.server 8027
```

Then open:

```text
http://127.0.0.1:8027
```

You can also use the **Live Server** extension in Visual Studio Code.

---

## Deployment

This website is designed to work directly with **GitHub Pages**.

After editing locally:

```bash
git add .
git commit -m "Update website"
git push
```

GitHub Pages will publish the updated version automatically.

---

# Credits and Acknowledgements

This website was created for Abdur Rahaman and has been adapted from, influenced by, or built with reference to several publicly available academic websites, services, and resources.

### Website Design Inspiration

- **Qizhen Lan** — the overall academic-homepage presentation, compact layout, research/publication organization, and several visual ideas were inspired by Qizhen Lan's academic website.  
  Website: https://lanqz7766.github.io/  
  Repository: https://github.com/lanqz7766/lanqz7766.github.io

- **Xi Xiao** — the publication-section presentation and related academic-website styling were referenced as additional design inspiration.  
  Website: https://xixiaouab.github.io/

The current website has been substantially customized for **Abdur Rahaman**, including its personal content, research interests, publication records, navigation, profile information, styling adjustments, links, images, CV integration, and other sections.

The purpose of these acknowledgements is to give clear credit for design inspiration rather than to imply authorship, endorsement, collaboration, or institutional affiliation.

### Visitor Map

- **MapMyVisitors** is used for the optional visitor-map widget.  
  Website: https://mapmyvisitors.com/

MapMyVisitors is a third-party hosted service. Its use is subject to its own privacy policy and terms of service. Visitor-location information provided by such services is approximate and should not be interpreted as exact user location data.

### Hosting

- **GitHub Pages** is used to host and publish this static website.  
  Website: https://pages.github.com/

### Development Assistance

Parts of the website's HTML, CSS, JavaScript, documentation, wording, and layout refinements were developed or revised with assistance from **ChatGPT by OpenAI**.

All final decisions regarding website content, research information, publication details, personal information, and deployment remain the responsibility of the website owner.

### Institutional Names and Logos

Names, logos, trademarks, and branding associated with institutions or professional organizations — including **IIT Indore**, **IEEE**, publishers, conferences, journals, universities, and research organizations — remain the property of their respective owners.

They are used only for identification, academic attribution, affiliation, or citation purposes. Their appearance on this website does **not** imply endorsement of the website or its owner.

### Publications, Figures, and External Resources

Publication titles, bibliographic information, paper links, code links, figures, thumbnails, conference names, journal names, and other externally sourced academic materials remain subject to the rights of their respective authors, publishers, conferences, repositories, or copyright holders.

Where possible, this website links directly to the original paper, publisher, arXiv page, project page, or code repository.

Third-party material is **not relicensed** by this repository.

---

## Personal Content

Unless otherwise stated, the following content is maintained by or for **Abdur Rahaman**:

- biography
- research interests
- personal academic profile
- education history
- awards and honors
- service information
- personal photographs
- research descriptions
- website-specific text and organization

---

## Attribution and Corrections

Every effort has been made to provide appropriate and fair attribution.

If you are the creator or rights holder of any material referenced on this website and believe that:

- attribution is missing,
- attribution should be changed,
- a link should be updated,
- or material should be removed,

please contact the website owner so that the issue can be corrected promptly.

---

## Contact

**Abdur Rahaman**  
PhD Research Scholar  
Indian Institute of Technology Indore  

Email: phd2401141001@iiti.ac.in  
Google Scholar: https://scholar.google.com/citations?user=OBP2g7wAAAAJ  
GitHub: https://github.com/abdur00dev  
ORCID: https://orcid.org/0009-0005-1038-5180

---

## Disclaimer

This is a personal academic website. Views and opinions expressed here are those of the website owner unless otherwise stated and do not necessarily represent the views of IIT Indore, IEEE, publishers, conference organizers, collaborators, or any other institution or organization mentioned on the site.
