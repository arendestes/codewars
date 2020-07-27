// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"




function domainName(url){
    let domainRegex= /(?<=https:\/\/www\.|https:\/\/|http:\/\/|www\.)\w+/;
    const domain = url.match(domainRegex);
    return domain[0];
  }

  const myDomain = domainName("www.cnet.com");
  console.log(myDomain);