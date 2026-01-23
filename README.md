# NOTES | CHEATSHEET |

## Readme basic command
### Header
  1. -#    Project Title
  2. -##   Section Title
  3. -###  Subsection
  
  ### Formatting
  1. **bold text**
  2. *italic text*
  3. ~~strikethrough~~
  
  ### List
  - Item 1
  - Item 2
    - Sub item
    - Sub item
  1. First step
  2. Second step
  3. Third step
  
  ### Links & Images
  1. [Playwright Docs](https://playwright.dev)
  2. ![Alt text](images/screenshot.png)
  
  ### Code Blocks (Very Important for Dev/Testers)
  1. Run `npm install` to install dependencies.
  ```bash
  npm install
  npx playwright test
  ```
  ### Checkboxes (Great for TODOs)
  - [x] Project setup
  - [ ] Write test cases
  - [ ] Configure CI


## Git basic command
### Local Repo -> Remote repo
1. git init
2. git remote add origin
3. git add .
4. git commit -m "your description"
5. git branch -M main
6. git push -u origin main
7. create a .gitignore (auto create by the Playwright package if selected)

### Remote repo --> Local repo
1. git clone "github url"