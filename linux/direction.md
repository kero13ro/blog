
## Redirection
- Standard Input, Standard Output and Standard Error are Data Streams.
- Using redirection you can control where those streams "flow"
- Standard Input = O, Standard Output = 1, Standard Error = 2.
- `>` will overwrite a file before writing to it.
- `>>` will append to what's already there.

```bash
cat > output.txt
cat < output.txt

# append to file
cat >> output.txt


date | cut  -d " " -f 1 > today.txt
```

## Tee command (T pipe)
- Piping connects STOUT of one command to the STDIN of another.
- Redirection of STOUT breaks pipelines.
- To save a data "snapshot" without breaking pipelines, use the tee command.
- If a command doesn't accept STDIN, but you want to pipe to it, use xargs.
- Commands you use with xargs can still have their own arguments.
```bash
# save a snapshot
date | tee fullDate.txt | cut  -d " " -f 1 > year.txt

# xargs 從stdin接受到的字串, 轉成後面命令的參數, 來執行後面的命令
date | xargs echo
```

## alias
```bash
# after 1 month and before 1 month since 2017
cal -A 1 -B 1 12 2017

alias ccc="xargs cal -A 1 -B 1"
echo "12 2022" | ccc
```


## Memo
```bash
ls -F #folder

echo $PATH
which cal
!18 # echo history 中第18行

cal # calendar
date
```
