# Project Boilerplate

## Get Started
#### Repo Configuration
1. Fork the repo and clone a local copy.
2. Configure the upstream remote by following these [steps](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork).
3. Before submitting a pull request to the original repo first rebase your master and branch:
    ```
    git checkout master &&
    git fetch upstream/master &&
    git rebase upstream/master && 
    git checkout YOUR_BRANCH && 
    git rebase master
   ```
   
 #### Running The Project
 `yarn start`