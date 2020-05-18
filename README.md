# Class Website

https://nss-cohort-37.github.io

# Instructions

For capstone videos, make sure what you include in the site are the embed links which you can get on youtube when you click the “share” button.

Here is the biggest rule: Ignore master. This means don’t merge anything into master; don’t make pull requests to master; don’t make a branch off of master; never merge master into another branch. Just assume that it doesn’t exists.

There is a Development branch that you can branch off of and make pull requests to. Basically pretend that the Development branch is the master branch. When the code in this branch is ready to be deployed:

-git checkout development
-git pull origin development
-npm run deploy
