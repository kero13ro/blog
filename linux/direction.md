
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
save a snapshot
```bash
date | tee fullDate.txt | cut  -d " " -f 1 > year.txt
```

## Memo
```bash
echo $PATH
which cal
!18 # echo history 中第18行
cal # calendar
date
```
