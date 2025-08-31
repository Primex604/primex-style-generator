# PrimexStyleGenerator 
![GitHub contributors](https://img.shields.io/github/contributors/Primex604/primex-style-generator) ![GitHub language count](https://img.shields.io/github/languages/count/Primex604/primex-style-generator) ![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/Primex604/primex-style-generator) ![GitHub Tag](https://img.shields.io/github/v/tag/Primex604/primex-style-generator)

A simple style viewer and generator Angular project made as a hobby with the purpose of showing and explaining/understanding some common and/or complex CSS style options.

This project runs without a DB nor extensive style libraries, it's made to be as pure of a CSS - HTML - JS/TS project so it can be tested as easily as possible, you can use the linked github page to test it or download the repo and add your own changes to it!

<img width="2528" height="1239" alt="image" src="https://github.com/user-attachments/assets/ca5b2c71-ac29-4aed-aefa-d7e93624779a" />

# How does it work

Under the right column you have a block showing the current styles displayed, each section (that are buttons that expand showing their content) holds a couple definitions related to the section name, e.g.: 
- `Dimensions` has styles related to an element height and width, padding, margin
- `Background` holds styles related to an element background (things like background-color, url, clip, etc) __NOT IMPLEMENTED YET AS OF 2025/08/31__
- `Clip-path` has samples and whole definitions of clip-path functions in order to produce shapes from a string input or from a svg path
- `Filter` has samples and definitions of filter functions
- `Mask` has samples and definitions of mask related effects (clip, mode, size, etc) __NOT IMPLEMENTED YET AS OF 2025/08/31__
  
  <img width="1252" height="965" alt="image" src="https://github.com/user-attachments/assets/3b87559b-816f-44d3-b923-252bbb02d948" />


As you explore each section you'll find a definition of each style and inputs that will allow you to apply a style to the colored element on the left column.

*Example: applying a circular clip-path to the element* 
<img width="2418" height="1075" alt="image" src="https://github.com/user-attachments/assets/ccd0e727-7087-4ff8-8286-4772b35d1ed5" />

You can play and combine with multiple styles that will be reflected in the style viewer on the left (if you find any issues please don't be afraid to report them!)
* Be aware though, depending on the current version of the repository/website, some definitions and/or styles might not be defined yet, like some buttons with no actions ( __STILL A WIP AS OF 2025/08/31__ )

## Contributing

Contributions are welcome to improve and expand on this project!

__To contribute please follow this small guideline:__

- Clone repository and create a new branch `$ git checkout https://github.com/Primex604/primex-style-generator -b new_branch_name`
- Make changes using or following the current structure of the project (if you find an problem with it please report it as an issue or contact my dev-mail) 

> __For new style sections__ 
>- Create a component inside the `../style-viewer/options` folder and rename it's selector from `app-component` to `Component` to follow the project structure and add it to the exports in `../style-viewer/options/index.ts` file to import it in `StyleViewer`.
>- Create a folder for it's dedicated `service` file to manage the style changes and add it to the exports in `./services/index.ts` file.
>- Add the corresponding CSS variable to `App` component (`--new-style` in .html file, it's usage in .scss file and the variable to track in .ts file)
>- Add the new style definition to the `StyleOptions` enum and add it to the styles list in `StyleViewer` component.
>- Use component `<Expandable>` with it's corresponding data to create a section.
>- __Please don't add outside style libraries__

> __For new functionalities__
>- Well, if there isn't one, create a tab section that separates styles from your new functionality so it doesn't "interfere" with the project original purpose.
>- Please provide good reasons for introducing this new "considerable" change to the project.

- Create and submit pull request with a description of the changes made
  ## Notes
  If you plan on doing changes to this project, I would appreciate if you could name your branches or pull requests as:
  - For bug fixes: `hotfix/branch_changes`
  - For new style sections: `section/branch_changes`
  - For big additions (e.g. new dedicated sections, general use components and such): `feature/branch_changes`
 For clearer version management purposes.

## FAQ

#### General: Can anyone contribute in this project?

Yes! This project is completely open to anyone from different experience levels in order to make a better resource for developers who stumble upon this repository or it's website, it doesn't matter if you're learning as a developer, you can use this repo as a learning tool for Angular development, project management and getting a small general work environment experience.

#### Design: why are there so many similar components in this project? Aren't they duplicating code?

While that can be true, I used this design as more "Single Responsibility" approach and better readibility of my components, a lot of these "duplicated" components appear on style sections with multiple definitions (4+ options), therefore, mashing in everything in a singular component might make the components harder to read, maintain, change and/or add new options to them (unless a big change it's made to it's structure to make them more general but I consider that unnecessary for a project of this scale and nature). In any way, you're welcome to contribute by proposing a better solution or changes to take out as much of "useless" code in this project!

#### Design: do you plan on adding _specific_style_ to the project?

While I would love to add as many things to this project for learning and helping purposes, this is not (currently) such a big project that contemplates having all and every style available like other pages dedicated to web development have, so unless it's something that is closely related to what is already there I'm not focused on making this project bigger than what it is, still you can try to contribute it yourself if you want it shown!, if it fits along the rest of the project I'll gladly add it and expand it with everyone's help!

#### Design: your enum file is too convoluted/messy, if some enums are only used by one component why not move them to their file?

I agree that it looks messy and I would like to clean it as well, however during development one finds out that some enums are used by different styles "unrelated" to each other and importing it from a specific file will look confusing, therefore all usable definitions are stored in a single file that I'd agree needs more formatting/comments in order to be easier to check out and use. (Tip: you can contribute to fix that problem~ )

#### Usage: do I need to credit it to use it?

Not entirely necessary, whatever you create with this tool it's from your work and understanding of styles. Still, any mention of this tool being helpful would be appreciated, whether it be a link to it or just a mention!

## Acknowledgements

 - [Mozilla CSS Page](https://developer.mozilla.org/en-US/docs/Web/CSS) - Great resource for understanding specific style options and nomenclatures. Most if not all definitions shown in this project come from here.
 - [W3 CSS Tutorial](https://www.w3schools.com/css/default.asp) - Another good resource for simpler explanations of CSS styles
 - [Bennett Feely's Clippy - CSS clip-path maker](https://bennettfeely.com/clippy/) - Amazing tool for creating clip-paths and the main inspiration for the creation of this project.



