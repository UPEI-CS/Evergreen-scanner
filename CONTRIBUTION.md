## 0. Overview

This is a contribution and best practices guide for out project. its not exhaustive but takes care of the most important issues i think.

---

## 1. Getting Started


- clone the repo. after that set up your local environment.
- Install  [Node](https://gist.github.com/MichaelCurrin/5c2d59b2bad4573b26d0388b05ab560e) after that, install the project dependencies by running `npm i`.



## 2 Branching

Branching is how we'll introduce new features, bug fixes, or experiments without walking over each other

### 2.0 GitHub Flow 

we'll be using GitHub Flow as our Branching strategy. its very straight forward and it consists of the following components

- **`main`/`master` Branch** → This is always the stable, deployable version of the our app. you should never directly commit to this branch
  
- **Feature Branches** → Create a new branch for each feature, fix or any change really. for Example:
  ```
  git checkout -b feature/new-login-page
  ```

  
- **Pull Requests (PRs)** → Once you're done, push your branch and open a PR, this is where we'll discuss the changes, give feedback and when youre approved 
  
- **Code Review** → Get feedback and make improvements. Once approved, merge the PR into `main`.


  
![alt text](https://cdn.hashnode.com/res/hashnode/image/upload/v1668070000889/rvf5Hx764.png)



## 3. Commits
Good commits should:
- Clearly explain what the commit does 
- sound as if you are giving a command, e.g., "Add feature" instead of "Added feature."
- be small commits that way its easier to identify issues.
- represent a single logical change. 
- ideally use [prefixes](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13) in commit messages

## 4 Issues

we'll use issues to plan, for discussions and to track work. when creating an issue
- Clearly explain the issue(lol) or feature .
- use appropriate tags (e.g., `bug`, `enhancement`, `documentation`).
- Assign yourself or anyone else  the task.
- Split big tasks into smaller, manageable issues.
- Link Issues to PRs, Use keywords like "Closes #10" in PRs to auto-close issues.



## 5 Pull Requests (PRs)


PRs are where code changes are proposed and reviewed before being merged into main. make sure to 


- Keep PRs focused on a single feature or fix.
- Explain what the PR does and why.
- Reference associated issues.
- Open draft PRs for pull request that aren't ready yet to be reviewd(i.e to ask for feedback ).
- Test code before submitting PR
- Be open to suggestions and make necessary changes.


## 6 Workflow Examples

### 6.0 Feature Development

**Task:** Add authentication.

1. **Create an Issue:**
   - Title: "Add user authentication system"
   - Labels: `feature`, `backend`
2. **Create a Feature Branch:**
   ```bash
   git checkout -b feature/user-authentication
   ```
3. **Develop the Feature:**
   - Implement login and signup functionality.
   - Test the feature locally.
4. **Open a PR:**
   - Title: "Feature: Add user authentication"
   - Description: "Implements login/signup Closes #someNumber."
5. **Code Review & Merge:**
   - Address feedback and merge the PR.
6. **Deploy:** Deploy the updated `main` branch.

### 6.1 Bug Fix Example

**Task:** Fix theme provider hydration error in Next.js.

1. **Create an Issue:**
   - Title: bug Theme Provider creates hydration error in Next.js
   - Labels: `bug`
2. **Create a Bugfix Branch:**
   ```bash
   git checkout -b bugfix/theme-hydration-error
   ```
3. **Fix the Bug:**
   - Test the fix.
4. **Open a PR:**
   - Title: "fix: prevent hydration error occuring because of Theme provider."
   - Description: " conditionally render the ThemeProvider only after the component has mounted. Fixes #69."
5. **Review & Merge:**
   - Get approval and merge the PR.

### 6.2 Minor Change Example

**Task:** Correct a typo in the README.

1. **Create a Branch:**
   ```bash
   git checkout -b docs/fix-typo
   ```
2. **Fix the Typo:**
   - Correct the spelling mistake in `README.md`.
3. **Open a PR:**
   - Title: "Docs: Fix typo in README"
   - Description: "Corrects a typo in the installation instructions."
4. **Merge the PR:**
   - Since it’s a minor change, it can be merged quickly.


## 7 other Notes
- Always pull before starting new work
- Create meaningful branch names
- vs code extensions like  GitLens etc are really useful
- follow the PR/issue templates
- [Git cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- 





