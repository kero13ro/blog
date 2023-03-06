
## Base
```bash
# 
echo $PATH
which cal
man date
!18 # echo history 中第18行

# calendar
cal
cal -y
date
date -u
```

## Redirection
- Standard Input, Standard Output and Standard Error are Data Streams.
- Using redirection you can control where those streams "flow"
- Standard Input = O, Standard Output = 1, Standard Error = 2.
- `>` will overwrite a file before writing to it.
- `>>` will append to what's already there.

```bash
date | cut  -d " " -f 1 > today.txt
# date | cut  --delimiter " " --fields 1 > today.txt
```

## tee
```

```