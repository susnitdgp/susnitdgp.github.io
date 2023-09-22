MSG="Committed At=>" $(date)

git:
	git status
	git add .
	git commit -m $MSG
	git push -u origin master