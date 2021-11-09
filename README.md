# npm-stats

Find the number and size of deps in a node_modules folder.


1) Create the deps.mjs using *npm ls* on your project:

```
> npm ls --all --json > deps.mjs
```

2) Create a size lookup table using this shell command:

```
> du -sk node_modules/* node_modules/@*/* | sed 's|node_modules/||' | awk 'BEGIN{print "const sizes = {" } {print "\"" $2 "\":" $1 ","} END {print "};\n\nexport default sizes;"}' > sizes.mjs
```

3) Serve up the stats page which imports deps.js which loads both of the modules you just created:
```
> npx http-server
Starting up http-serve for ./
Available on:
  http://127.0.0.1:8080
  http://192.168.1.101:8080
Hit CTRL-C to stop the server
```

Now visit http://localhost:8080/deps.html and you should see something like this in the JS Console:

![image](https://user-images.githubusercontent.com/2480879/140950795-52f05970-b06f-4b36-903d-1a9ad5e9a434.png)
