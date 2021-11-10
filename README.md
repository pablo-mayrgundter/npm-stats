# npm-stats

Find the number and size of deps in a node_modules folder.


# In the project you're profiling...
In the project you're profiling, with a fully installed node_modules directory, create a deps.mjs using *npm ls*, then copy it back to this repo:
```
> (echo -n 'const pkgDeps = ' ; npm ls --all --json ; echo 'export default pkgDeps;') > pkgDeps.mjs
```

Create a size lookup table using this shell command:
```
> du -sk node_modules/* node_modules/@*/* | sed 's|node_modules/||' | \
awk 'BEGIN{print "const sizes = {" } {print "\"" $2 "\":" $1 ","} END {print "};\n\nexport default sizes;"}' > sizes.mjs
```

# Back in this repo...

Copy the *pkgDeps.mjs* and *sizes.mjs* from your target project back to this repo.

Then up the stats page which will load them and shows stats in the JS Console:
```
> cp $MY_NODE_PROJECT/{pkgDeps,sizes}.mjs .
> npx http-server
Starting up http-serve for ./
Available on:
  http://127.0.0.1:8080
  http://192.168.1.101:8080
Hit CTRL-C to stop the server
```

Now visit http://localhost:8080/deps.html and you should see something like this in the JS Console:

![image](https://user-images.githubusercontent.com/2480879/140950795-52f05970-b06f-4b36-903d-1a9ad5e9a434.png)
