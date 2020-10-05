# RS School NodeJS course - Task 1 - Caesar cipher CLI tool

**Clone this repository**

```
git clone https://github.com/zzVIPz/caesar-cipher-cli
```

**Install dependencies**

```
npm install
```

**Change directory to caesar-cli**

```
cd caesar-cli

```

**Run commands in terminal**

```
node app [options]
```

## Application description

**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift - `required`
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode - `required`

**Options description:**

```bash
$ node app --help
```

**Usage example:**

```
node app -a encode -s 7 -i "./input.txt" -o "./output.txt"
node app -a encode -s 7 -i ./input.txt -o ./output.txt
node app -a encode -s 7 -i input.txt --output output.txt
```

```bash
node app --action encode --shift 7 --input dir/plain.txt --output dir/encode.txt
node app --action encode --shift 7 --input ./dir/plain.txt --output ./dir/encode.txt
node app --action encode --shift 7 --input "./dir/plain.txt" --output "./dir/encode.txt"
```

```bash
$ node app --action decode --shift 7 --input input.txt --output output.txt
```

**Decode text**

> input.txt
> `This is secret. Message about "_" symbol!`

**Encode text**

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
