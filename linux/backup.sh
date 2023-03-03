
alias copyLastCmd='fc -ln -1 | awk '\''{$1=$1}1'\'' | pbcopy'
alias pop='git reset head^ --soft'

alias yy="yarn start"
alias dev='npm run dev'

ww() {
  git checkout -b hotfix/24617
  git add .
  git commit -m 'fix: ....'
  git push
  git tag 3.57.3-24617.0
  git push origin 3.57.3-24617.0
}

aa() {
  git tag $1
  git push origin $1
  git push
}

tt() {
  TAG=$(npm version prerelease --preid="$1")
  echo ${TAG}
  git push origin ${TAG}
  git push
}

mem() {
  echo ocms-skin-style$1-$2
  npm run linkTemplate -- /Users/keroliao/Documents/main/froend/template/ocms-template-style$1
  npm run linkSkin -- /Users/keroliao/Documents/main/froend/style/ocms-skin-style$1-$2
  npm run initProcess
  npm run dev
}

db() {
  git push -d origin $1
  git branch -d $1
}
dt() {
  git tag --delete $1
  git push --delete origin $1
}


gf() {
  git fetch
}
gp() {
  git pull
}
gl() {
  git log --oneline --decorate
}


