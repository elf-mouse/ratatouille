# 02 Set Up Command Line Shortcuts

**TL;DR**

- Make the command line work for you; create aliases that are easy to remember and fast to type.
- Give Github dotfiles a try to save, share and sync up your command line shortcuts.

## How to Set Them Up

The easiest way to create command-line shortcuts is to add aliases for common commands to your bashrc file. On Mac or Linux:

1 - From the command line anywhere, type:

CMD:

    open -a 'Sublime Text' ~/.bashrc

2 - Add a new alias, for example:

CMD:

    alias master='git checkout master'

3 - Anytime you are in a directory with a git repo, you can run the command `master` and it will checkout the master branch for you.

Note: See these instructions for [setting up Windows aliases](http://msdn.microsoft.com/en-us/library/windows/desktop/ms682057(v=vs.85).aspx).

## Shortcuts We Recommend

These are a few commands that you may find useful.

Command | Alias
------- | -----
Open your editor | alias st='open -a "Sublime Text"'
Launch a server | alias server="python -m SimpleHTTPServer"
Go to a directory you commonly work in | alias p="cd ~/projects"

## Save, Share and Sync Your Shortcuts

Store your shortcuts and dot files on Github. The major gain with this is your shortcuts can be shared across devices and they are always backed up.

Github even created a [dedicated page for dotfiles](http://dotfiles.github.io/) and quite a few of the Chrome Team have forked [Mathias Bynens’ dotfiles](https://github.com/mathiasbynens/dotfiles).
