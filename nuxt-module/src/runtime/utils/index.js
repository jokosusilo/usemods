function scrollToAnchor(id){return new Promise((resolve,reject)=>{setTimeout(()=>{const selector=`#${id}`,element=document.querySelector(selector);if(!element){reject(`Element with id '${id}' not found.`);return}element.scrollIntoView({behavior:"smooth",block:"start"}),resolve()},180)})}function toggleBodyScroll(className="fixed"){return new Promise((resolve,reject)=>{try{const body=document.body,isFixed=body.classList.contains(className),scrollY=isFixed?parseInt(body.style.top,10):window.scrollY;if(body.style.top=isFixed?"":`-${scrollY}px`,body.classList.toggle(className,!isFixed),isFixed)window.scrollTo(0,-scrollY);resolve()}catch(error){reject(error)}})}function toggleElementScroll(element){return new Promise((resolve,reject)=>{if(element.dataset.isScrollLocked==="true")element.style.overflow="",delete element.dataset.isScrollLocked;else element.style.overflow="hidden",element.dataset.isScrollLocked="true";resolve()})}function copyToClipboard(value){if(!navigator.clipboard||!navigator.clipboard.writeText)return Promise.reject("Clipboard API is not available");return navigator.clipboard.writeText(String(value)).catch((error)=>{throw console.error("Failed to copy text: ",error),error})}function toggleFullScreen(){return new Promise((resolve,reject)=>{if(document.fullscreenElement)document.exitFullscreen().then(resolve).catch(reject);else document.documentElement.requestFullscreen().then(resolve).catch(reject)})}function resetForm(form){return new Promise((resolve,reject)=>{try{form.reset(),resolve()}catch(error){reject(error)}})}function focusOnInvalid(container){return new Promise((resolve,reject)=>{try{const input=container.querySelector("input:invalid, select:invalid, textarea:invalid");if(input)input.focus(),input.scrollIntoView({behavior:"smooth",block:"center"});resolve()}catch(error){reject(error)}})}function focusOnNth(container,index=0){return new Promise((resolve,reject)=>{const elements=container.querySelectorAll("input, textarea, select"),elementIndex=index===-1?elements.length-1:index;if(elementIndex<0||elementIndex>=elements.length)return reject(new Error(`Element at index ${index} is out of bounds.`));const element=elements[elementIndex];if(!element||typeof element.focus!=="function")return reject(new Error("Failed to focus on the element."));try{element.focus({preventScroll:!0}),element.scrollIntoView({behavior:"smooth",block:"center"}),resolve()}catch(error){reject(new Error("Failed to focus on the element."))}})}function focusTrap(container){const focusableElements=container.querySelectorAll('a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'),firstFocusableElement=focusableElements[0],lastFocusableElement=focusableElements[focusableElements.length-1];container.addEventListener("keydown",(event)=>{if(!(event.key==="Tab"||event.keyCode===9))return;if(event.shiftKey){if(document.activeElement===firstFocusableElement)lastFocusableElement.focus(),event.preventDefault()}else if(document.activeElement===lastFocusableElement)firstFocusableElement.focus(),event.preventDefault()})}function formatNumber(number,options){const safeDecimals=Math.max(0,Math.min(options?.decimals??2,20));let config={style:"decimal",minimumFractionDigits:safeDecimals===0?0:safeDecimals===1?1:2,maximumFractionDigits:safeDecimals};return new Intl.NumberFormat(options?.locale??"en-US",config).format(number)}function formatCurrency(number,options){const safeDecimals=Math.max(0,Math.min(options?.decimals??2,20));let config={style:"currency",currencyDisplay:"narrowSymbol",minimumFractionDigits:safeDecimals===0?0:safeDecimals===1?1:2,maximumFractionDigits:safeDecimals,currency:currencySymbols.get(options?.locale??"en-US")||"USD"};return new Intl.NumberFormat(options?.locale??"en-US",config).format(number)}function formatValuation(number,options){const safeDecimals=Math.max(0,Math.min(options?.decimals??2,20));let config={style:"currency",currencyDisplay:"narrowSymbol",notation:"compact",compactDisplay:"short",minimumFractionDigits:safeDecimals===0?0:safeDecimals===1?1:2,maximumFractionDigits:safeDecimals,currency:currencySymbols.get(options?.locale??"en-US")||"USD"};return new Intl.NumberFormat(options?.locale??"en-US",config).format(number)}function formatPercentage(value,options){const safeDecimals=Math.max(0,Math.min(options?.decimals??2,20));let config={style:"percent",minimumFractionDigits:safeDecimals===0?0:safeDecimals===1?1:2,maximumFractionDigits:safeDecimals};return new Intl.NumberFormat(options?.locale??"en-US",config).format(value)}function formatDurationLabels(seconds,options){const time=[{unit:options?.labels==="short"?"yr":" year",secondsInUnit:31536000},{unit:options?.labels==="short"?"mo":" month",secondsInUnit:2628000},{unit:options?.labels==="short"?"wk":" week",secondsInUnit:604800},{unit:options?.labels==="short"?"d":" day",secondsInUnit:86400},{unit:options?.labels==="short"?"hr":" hour",secondsInUnit:3600},{unit:options?.labels==="short"?"min":" minute",secondsInUnit:60},{unit:options?.labels==="short"?"s":" second",secondsInUnit:1}];if(seconds==0)return`0${options?.labels==="short"?"s":" seconds"}`;if(options?.round){for(let{secondsInUnit}of time)if(seconds>=secondsInUnit){seconds=seconds-seconds%secondsInUnit;break}}let remainingSeconds=seconds,formattedTime="";for(let{unit,secondsInUnit}of time){const count=Math.floor(remainingSeconds/secondsInUnit);if(count>0)formattedTime+=`${count}${count===1||options?.labels==="short"?unit:unit+"s"} `,remainingSeconds-=count*secondsInUnit}return formattedTime.trim()}function formatDurationNumbers(seconds){const hours=Math.floor(seconds/3600),minutes=Math.floor((seconds-hours*3600)/60),remainingSeconds=seconds-hours*3600-minutes*60;return[hours,minutes,remainingSeconds].map((value)=>value.toString().padStart(2,"0")).join(":")}function formatNumberToWords(value){const underTwenty=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],tens=["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if(value<20)return underTwenty[value];if(value<100)return`${tens[Math.floor(value/10)-2]}${value%10?"-"+underTwenty[value%10]:""}`;const formatGroup=(number)=>{if(number>=100){const remainder=number%100;return`${underTwenty[Math.floor(number/100)]} hundred${remainder?` and ${formatGroup(remainder)}`:""}`}else if(number>=20)return`${tens[Math.floor(number/10)-2]}${number%10?"-"+underTwenty[number%10]:""}`;else return underTwenty[number]},scales=[""," thousand"," million"," billion"," trillion"," quadrillion"," quintillion"];let scaleIndex=0,result="";while(value>0){const groupValue=value%1000;if(groupValue>0)result=formatGroup(groupValue)+scales[scaleIndex]+(result?", "+result:"");value=Math.floor(value/1000),scaleIndex++}return result.trim()}function formatInitials(text,options){if(!text)return"";return text=text.replace(/(Mrs|Mr|Ms|Dr|Jr|Sr|Prof|Hon|Snr|Jnr|St)\.?/g,"").trim(),text.split(" ").filter((word)=>!["the","third"].includes(word.toLowerCase())).map((word)=>word.charAt(0).toUpperCase()).join("").substring(0,options?.length??2)}function formatUnixTime(timestamp){return new Date(timestamp*1000).toISOString().replace("T"," ").replace("Z","")}function formatList(items,options){if(typeof items==="string")items=items.split(",").map((item)=>item.trim());if(typeof items==="object"&&!Array.isArray(items))items=Object.values(items);if(!Array.isArray(items)||items.length===0)return"";if(items.length<=2)return items.join(items.length===2?` ${options?.conjunction||"and"} `:"");const effectiveLimit=options?.limit??items.length;if(items.length<=effectiveLimit)return items.slice(0,-1).join(", ")+` ${options?.conjunction||"and"} `+items.slice(-1);const listedItems=items.slice(0,effectiveLimit).join(", "),remaining=items.length-effectiveLimit;return`${listedItems} ${options?.conjunction||"and"} ${remaining} more`}function formatTitle(text){if(!text)return"";const exceptions=new Set(["a","an","to","the","for","and","nor","but","or","yet","so","in","is","it","than","on","at","with","under","above","from","of","although","because","since","unless"]);return text.split(" ").map((word,index,wordsArray)=>{const lowerWord=word.toLowerCase();if(index===0||index===wordsArray.length-1||!exceptions.has(lowerWord))return word.charAt(0).toUpperCase()+word.slice(1);return lowerWord}).join(" ")}function formatSentenceCase(text){return text.split("\n\n").map((paragraph)=>paragraph.split(". ").map((sentence)=>sentence.charAt(0).toUpperCase()+sentence.slice(1)).join(". ")).join("\n\n")}function formatTextWrap(value){const space=value.lastIndexOf(" ");if(space!==-1)return value.substring(0,space)+"&nbsp;"+value.substring(space+1);return value}var currencySymbols=new Map([["en-US","USD"],["en-GB","GBP"],["en-AU","AUD"],["en-CA","CAD"],["en-NZ","NZD"],["en-ZA","ZAR"],["de-DE","EUR"],["fr-FR","EUR"],["es-ES","EUR"],["it-IT","EUR"],["pt-PT","EUR"],["nl-NL","EUR"],["da-DK","DKK"],["sv-SE","SEK"],["nb-NO","NOK"],["fi-FI","EUR"],["pl-PL","PLN"],["tr-TR","TRY"],["ru-RU","RUB"],["ja-JP","JPY"],["zh-CN","CNY"],["ko-KR","KRW"],["ar-SA","SAR"],["he-IL","ILS"],["id-ID","IDR"],["ms-MY","MYR"],["th-TH","THB"],["vi-VN","VND"],["hi-IN","INR"],["bn-IN","INR"],["pa-IN","INR"],["gu-IN","INR"],["or-IN","INR"],["ta-IN","INR"],["te-IN","INR"],["kn-IN","INR"],["ml-IN","INR"]]);function startWith(value,start){if(value.startsWith(start))return value;return start+value}function startWithout(value,start){if(value.startsWith(start))return value.substring(start.length);return value}function endWith(text,end){if(text.endsWith(end))return text;return text+end}function endWithout(text,end){if(text.endsWith(end))return text.substring(0,text.length-end.length);return text}function surroundWith(text,start,end){if(text.startsWith(start)&&text.endsWith(end))return text;if(text.startsWith(start))return text+end;if(text.endsWith(end))return start+text;return start+text+end}function pluralize(value,count){if(!value)return"";if(value=value.trim().toLowerCase(),count===1)return value;if(unchangingPlurals.has(value))return value;if(irregularPlurals.has(value))return irregularPlurals.get(value)||value;if(value.endsWith("f"))return value.slice(0,-1)+"ves";if(value.endsWith("fe"))return value.slice(0,-2)+"ves";if(value.endsWith("y"))return value.slice(0,-1)+"ies";if(value.endsWith("s"))return value;if(value.endsWith("x"))return value+"es";if(value.endsWith("ch"))return value+"es";if(value.endsWith("sh"))return value+"es";return value+"s"}function singularize(value){if(value=value.trim().toLowerCase(),unchangingPlurals.has(value))return value;if(irregularPlurals.has(value))return irregularPlurals.get(value)||value;if(value.endsWith("ives"))return value.slice(0,-4)+"ife";if(value.endsWith("ves"))return value.slice(0,-3)+"f";if(value.endsWith("ies"))return value.slice(0,-3)+"y";if(value.endsWith("ches")||value.endsWith("shes")||value.endsWith("xes"))return value.slice(0,-2);if(value.endsWith("oes"))return value.slice(0,-2);if(value.endsWith("us")||value.endsWith("ss"))return value;if(value.endsWith("i"))return value.slice(0,-1)+"us";if(value.endsWith("a"))return value.slice(0,-1)+"on";if(value.endsWith("s")&&value.length>1)return value.slice(0,-1);return value}function ordinalize(value){const suffixes=["th","st","nd","rd"],remainder=value%100;return value+(suffixes[(remainder-20)%10]||suffixes[remainder]||suffixes[0])}function stripHtml(text){return text.replace(/<[^>]*>?/gm,"")}function stripWhitespace(text){return text.replace(/\s+/g,"")}function stripNumbers(text){return text.replace(/[0-9]/g,"")}function stripPunctuation(text){return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")}function stripSymbols(text){return text.replace(/[^\w\s]|_/g,"")}function stripEmojis(text){return text.replace(/[\p{Emoji_Presentation}\p{Emoji}\uFE0F\u200D\u20E3]/gu,"")}function slugify(text){return text.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-")}function deslugify(text){return text.toLowerCase().replace(/-/g," ")}function camelCase(text){return text.trim().split(/[-\s]/).map((word,index)=>{if(index===0)return word.toLowerCase();return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()}).join("")}function pascalCase(text){return text.trim().split(/[-\s]/).map((word)=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join("")}function snakeCase(text){return text.trim().replace(/\s+/g,"_").toLowerCase()}function kebabCase(text){return text.replace(/(?:^\w|[A-Z]|\b\w)/g,(word,index)=>{return index===0?word.toLowerCase():"-"+word.toLowerCase()}).replace(/\s+/g,"")}function titleCase(text){return text.replace(/(?:^\w|[A-Z]|\b\w)/g,(word,index)=>{return word.toUpperCase()}).replace(/\s+/g," ")}function escapeHtml(text){return text.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function unescapeHtml(text){return text.replace(/&lt;/g,"<").replace(/&gt;/g,">")}var unchangingPlurals=new Set(["sheep","fish","deer","hay","moose","series","species","aircraft","bison","buffalo","cod","elk","halibut","hovercraft","lego","mackerel","salmon","spacecraft","swine","trout","tuna"]),irregularPlurals=new Map([["child","children"],["person","people"],["man","men"],["woman","women"],["tooth","teeth"],["foot","feet"],["mouse","mice"],["goose","geese"],["ox","oxen"],["leaf","leaves"],["life","lives"],["knife","knives"],["wife","wives"],["half","halves"],["elf","elves"],["loaf","loaves"],["potato","potatoes"],["tomato","tomatoes"],["cactus","cacti"],["focus","foci"],["fungus","fungi"],["nucleus","nuclei"],["syllabus","syllabi"],["analysis","analyses"],["diagnosis","diagnoses"],["oasis","oases"],["thesis","theses"],["crisis","crises"]]);function detectScrollPosition(){return{x:window.scrollX,y:window.scrollY}}function detectMousePosition(event){return{x:event.pageX,y:event.pageY}}function detectRelativeMousePosition(event){const{innerWidth,innerHeight}=window;return{x:event.clientX/innerWidth,y:event.clientY/innerHeight}}function detectWindowSize(){return{width:window.innerWidth,height:window.innerHeight}}function detectScreenSize(){return{width:window.screen.width,height:window.screen.height}}function detectDevice(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop"}function detectOS(){const userAgent=navigator.userAgent.toLowerCase();if(userAgent.includes("win"))return"Windows";if(userAgent.includes("mac"))return"Mac";if(userAgent.includes("linux"))return"Linux";if(userAgent.includes("x11"))return"UNIX";if(userAgent.includes("android"))return"Android";if(userAgent.includes("iphone"))return"iOS";return"Unknown"}function detectActiveBrowser(){return!document.hidden}function detectColorScheme(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function detectUserTimezone(){return Intl.DateTimeFormat().resolvedOptions().timeZone}function detectDeviceOrientation(){return window.screen.orientation.type}function detectBreakpoint(){const width=window.innerWidth;if(width<640)return"xs";if(width<768)return"sm";if(width<1024)return"md";if(width<1280)return"lg";if(width<1536)return"xl";return"2xl"}function detectContainerBreakpoint(element){const width=element.getBoundingClientRect().width;if(width<320)return"@xs";if(width<384)return"@sm";if(width<448)return"@md";if(width<512)return"@lg";if(width<576)return"@xl";if(width<672)return"@2xl";if(width<768)return"@3xl";if(width<896)return"@4xl";if(width<1024)return"@5xl";if(width<1152)return"@6xl";if(width<1280)return"@7xl";return"@7xl"}function detectNetworkStatus(){return navigator.onLine?"Online":"Offline"}function detectUrl(){return window.location.href}function detectUrlPath(){return window.location.pathname.split("/").filter((p)=>p)}function detectUrlParams(){const searchParams=new URLSearchParams(window.location.search),paramsArray=[];for(let[key,value]of searchParams.entries())paramsArray.push({[key]:value});return paramsArray.length>0?paramsArray:null}function detectUrlHash(){return window.location.hash.replace("#","")}function detectHost(){return window.location.host}function detectHostName(){return window.location.hostname}function detectPort(){return window.location.port}function generateNumber(length){return Math.floor(Math.random()*Math.pow(10,length))}function generateNumberBetween(min,max){if(min>max)console.warn("[MODS] Warning: min value is higher than max value");return Math.floor(Math.random()*(max-min+1)+min)}function generateUuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(c)=>{const r=Math.random()*16|0;return(c==="x"?r:r&3|8).toString(16)})}function generateShortId(length=36){const timestampPart=Math.floor(Date.now()).toString(length).toUpperCase(),randomPart=Math.random().toString(length).slice(2).toUpperCase();return(timestampPart+randomPart).slice(0,length)}function generatePassword(length=8){if(length<8)length=8;const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ",lowercase=uppercase.toLowerCase(),numbers="0123456789",symbols="!@#$%^&*",allChars=uppercase+lowercase+numbers+symbols,passwordArray=[uppercase[Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0]*uppercase.length)],lowercase[Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0]*lowercase.length)],numbers[Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0]*numbers.length)],symbols[Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0]*symbols.length)]];for(let i=passwordArray.length;i<length;i++)passwordArray.push(allChars[Math.floor(Math.random()*allChars.length)]);for(let i=passwordArray.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[passwordArray[i],passwordArray[j]]=[passwordArray[j],passwordArray[i]]}return passwordArray.join("")}function generateLoremIpsum(count=5,format="words"){const lorem="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" "),generateSentence=()=>{const words=Array.from({length:Math.floor(Math.random()*10)+5},()=>lorem[Math.floor(Math.random()*lorem.length)]).join(" ");return formatSentence(words)},formatSentence=(sentence)=>{return sentence.charAt(0).toUpperCase()+sentence.slice(1)+"."};if(format==="sentences")return Array.from({length:count},generateSentence).join(" ");else if(format==="paragraphs")return Array.from({length:count},()=>Array.from({length:Math.floor(Math.random()*3)+2},generateSentence).join(" ")).join("\n\n");else return lorem.slice(0,count).join(" ")}function sum(numbers){return numbers.reduce((a,b)=>a+b,0)}function mean(numbers){return sum(numbers)/numbers.length}function average(numbers){return mean(numbers)}function margin(value,percentage){return value*percentage/100}function addMargin(value,percentage){return value+margin(value,percentage)}function subtractMargin(value,percentage){return value-margin(value,percentage)}function subtractMarkup(value,percentage){return value/(1+percentage/100)}function addMarkup(value,percentage){return value+subtractMarkup(value,percentage)}function median(numbers){const sorted=numbers.sort((a,b)=>a-b),middle=Math.floor(sorted.length/2);if(sorted.length%2===0)return(sorted[middle-1]+sorted[middle])/2;return sorted[middle]}function mode(numbers){if(numbers.length===0)return null;if(numbers.length===1)return numbers[0];const frequencyMap=new Map;numbers.forEach((num)=>frequencyMap.set(num,(frequencyMap.get(num)||0)+1));const maxEntry=[...frequencyMap.entries()].reduce((a,b)=>a[1]>b[1]?a:b);if(maxEntry[1]>1)return maxEntry[0];return null}function min(numbers){return Math.min(...numbers)}function max(numbers){return Math.max(...numbers)}function minMax(numbers){if(numbers.length===0)return[0,0];return[min(numbers),max(numbers)]}function range(numbers){return max(numbers)-min(numbers)}function standardDeviation(numbers){return Math.sqrt(mean(numbers.map((num)=>Math.pow(num-mean(numbers),2))))}function skewness(numbers){const n=numbers.length,meanValue=mean(numbers);if(standardDeviation(numbers)===0)return;let sum2=0;for(let num of numbers)sum2+=(num-meanValue)**3;return n/((n-1)*(n-2))*(sum2/standardDeviation(numbers)**3)}function isEmail(value){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)}function isNumber(value){if(typeof value==="number")return!0;return console.warn("[MODS] Non-numeric value passed to isNumber validator."),!1}function isUrl(value){return/^(?:\w+:)?\/\/([^\s\.]+\.\S{2,}|localhost[\:?\d]*(?:[^\:?\d]\S*)?)$/.test(value)}function isEmpty(value){if(value===null||value===void 0)return!0;if(typeof value==="string")return value==="";if(Array.isArray(value))return value.length===0;if(typeof value==="object")return Object.keys(value).length===0;return!0}function isUuid(value){return/^[a-f\d]{8}(-[a-f\d]{4}){4}[a-f\d]{8}$/i.test(value)}function isJson(value){try{return JSON.parse(value),!0}catch(error){return!1}}function isObject(value){return value&&typeof value==="object"&&value.constructor===Object}function isArray(value){return Array.isArray(value)}function isHex(value){return/^#?([0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(value)}function isAlphabetic(value){return/^[a-zA-Z]+$/.test(value)}function isAlphanumeric(value){return/^[a-zA-Z0-9]+$/.test(value)}function isBoolean(value){return typeof value==="boolean"||value==="false"||value==="true"}function isUndefined(value){return value===void 0}function isNull(value){return value===null}function isDate(value){if(value instanceof Date)return!isNaN(value.getTime());else if(typeof value==="string"||typeof value==="number"){const date=new Date(value);return!isNaN(date.getTime())&&date.toString()!=="Invalid Date"}return!1}function isTime(value){return/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(value)}function isLeapYear(value){return value%4===0&&value%100!==0||value%400===0}function isEven(value){return value%2===0}function isOdd(value){return Math.abs(value%2)===1}function isPositive(value){return Math.sign(value)===1}function isNegative(value){return Math.sign(value)===-1}function isZero(value){return value===0}function isOver9000(value){return value>9000}function isPrime(value){const boundary=Math.floor(Math.sqrt(value));for(let i=2;i<=boundary;i++)if(value%i===0)return!1;return value>=2}function isInteger(value){if(!isNumber(value))return!1;return value%1===0}function isFloat(value){if(!isNumber(value))return!1;return!isInteger(value)}function isBetween(value,min2,max2){if(min2>max2)[min2,max2]=[max2,min2];return value>=min2&&value<=max2}function isDivisibleBy(value,divisor){return value%divisor===0}function isCreditCard(value){return/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(value)}function isLatLng(value){return/^([-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)),\s*([-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?))$/.test(value)}function isLatitude(value){return/^[-+]?([1-8]?\d(\.\d{1,6})?|90(\.0{1,6})?)$/.test(value)}function isLongitude(value){return/^[-+]?(180(\.0{1,6})?|((1[0-7]\d)|([1-9]?\d))(\.\d{1,6})?)$/.test(value)}function isIpAddress(value){return/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)((?::\d+)?|)$/.test(value)}function isPort(value){return value>0&&value<=65535}function isMacAddress(value){return/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(value)}function dataShuffle(items){if(!items||!(isObject(items)||isArray(items)))return console.warn("[MODS] Warning: dataShuffle() expects an object or array as the first argument."),items;const shuffleArray=(array)=>{for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]]}return array};if(isObject(items)){const entries=Object.entries(items);return Object.fromEntries(shuffleArray(entries))}else return shuffleArray([...items])}function dataReverse(items){if(!items||!(isObject(items)||isArray(items)))return console.warn("[MODS] Warning: dataReverse() expects an object or array as the first argument."),items;if(isObject(items)){const entries=Object.entries(items);return Object.fromEntries(entries.reverse())}else return items.reverse()}function dataSortBy(items,options){const comparator=(a,b)=>{const property=options?.property,order=options?.order??"asc";if(!property)return 0;if(a[property]<b[property])return order==="asc"?-1:1;if(a[property]>b[property])return order==="asc"?1:-1;return 0};if(isObject(items)){const entries=Object.entries(items);return Object.fromEntries(entries.sort((a,b)=>comparator(a[1],b[1])))}else return items.sort(comparator)}function dataRemoveDuplicates(...arrays){const mergedArray=arrays.flat();return mergedArray.filter((item,index)=>mergedArray.indexOf(item)===index)}function dataFlatten(items){if(isObject(items)){const flattened={};return Object.keys(items).forEach((key)=>{const item=items[key];flattened[key]=Array.isArray(item)?dataFlatten(item):item}),flattened}else if(Array.isArray(items))return items.reduce((acc,val)=>acc.concat(Array.isArray(val)?dataFlatten(val):val),[]);else return items}function dataWithout(items,properties){const propertyArray=Array.isArray(properties)?properties:[properties];if(isObject(items)){const entries=Object.entries(items);return Object.fromEntries(entries.filter(([key])=>!propertyArray.includes(key)))}else return items.filter((item)=>!propertyArray.includes(item))}function splitByWords(text){const sentences=text.split(/([\.\?\!])\s*/);let wordIndex=0,combinedSentences=[];for(let i=0;i<sentences.length;i+=2){const sentence=sentences[i]+(sentences[i+1]||"");if(sentence.trim()==="")continue;const words=sentence.split(" ").map((word)=>{return wordIndex++,`<span class="word"><span class="word-${wordIndex}">${word}</span></span>`}).join(" ");combinedSentences.push(`<span class="sentence sentence-${combinedSentences.length+1}">${words}</span>`)}return combinedSentences.join(" ")}function checkPasswordStrength(value,length,uppercase,numbers,special){let strength=0;const counts={uppercase:(value.match(/[A-Z]/g)||[]).length,numbers:(value.match(/[0-9]/g)||[]).length,special:(value.match(/[^a-zA-Z0-9]/g)||[]).length};if(value.length<length)return{score:1,label:`Password must be at least ${length} characters long`};if(counts.uppercase<uppercase)return{score:1,label:`Password must contain ${uppercase} uppercase letter`};if(counts.numbers<numbers)return{score:1,label:`Password must contain ${numbers} number`};if(counts.special<special)return{score:1,label:`Password must contain ${special} special character`};if(value.length>=length)strength++;if(counts.uppercase>=uppercase)strength++;if(counts.numbers>=numbers)strength++;if(counts.special>=special)strength++;if(strength===4)return{score:4,label:"Very Strong"};if(strength===3)return{score:3,label:"Strong"};if(strength===2)return{score:2,label:"Medium"};if(strength===1)return{score:1,label:"Weak"};return{score:0,label:"Very Weak"}}function readingTime(text,wordsPerMinute=200){const words=text.split(" ").length,minutes=Math.ceil(words/wordsPerMinute);return formatDurationLabels(minutes*60)}function mergeFields(text,fields,brackets="{{}}"){const bracketHalf=brackets.length/2,escapeRegExp=(string)=>string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),startBracket=escapeRegExp(brackets.slice(0,bracketHalf)),endBracket=escapeRegExp(brackets.slice(bracketHalf)),pattern=new RegExp(`${startBracket}(\\w+)${endBracket}`,"g");return text.replace(pattern,(match,key)=>{const replacement=fields[key.trim()];return replacement!==void 0?replacement.toString():match})}export{unescapeHtml,toggleFullScreen,toggleElementScroll,toggleBodyScroll,titleCase,surroundWith,sum,subtractMarkup,subtractMargin,stripWhitespace,stripSymbols,stripPunctuation,stripNumbers,stripHtml,stripEmojis,startWithout,startWith,standardDeviation,splitByWords,snakeCase,slugify,skewness,singularize,scrollToAnchor,resetForm,readingTime,range,pluralize,pascalCase,ordinalize,mode,minMax,min,mergeFields,median,mean,max,margin,kebabCase,isZero,isUuid,isUrl,isUndefined,isTime,isPrime,isPositive,isPort,isOver9000,isOdd,isObject,isNumber,isNull,isNegative,isMacAddress,isLongitude,isLeapYear,isLatitude,isLatLng,isJson,isIpAddress,isInteger,isHex,isFloat,isEven,isEmpty,isEmail,isDivisibleBy,isDate,isCreditCard,isBoolean,isBetween,isArray,isAlphanumeric,isAlphabetic,generateUuid,generateShortId,generatePassword,generateNumberBetween,generateNumber,generateLoremIpsum,formatValuation,formatUnixTime,formatTitle,formatTextWrap,formatSentenceCase,formatPercentage,formatNumberToWords,formatNumber,formatList,formatInitials,formatDurationNumbers,formatDurationLabels,formatCurrency,focusTrap,focusOnNth,focusOnInvalid,escapeHtml,endWithout,endWith,detectWindowSize,detectUserTimezone,detectUrlPath,detectUrlParams,detectUrlHash,detectUrl,detectScrollPosition,detectScreenSize,detectRelativeMousePosition,detectPort,detectOS,detectNetworkStatus,detectMousePosition,detectHostName,detectHost,detectDeviceOrientation,detectDevice,detectContainerBreakpoint,detectColorScheme,detectBreakpoint,detectActiveBrowser,deslugify,dataWithout,dataSortBy,dataShuffle,dataReverse,dataRemoveDuplicates,dataFlatten,copyToClipboard,checkPasswordStrength,camelCase,average,addMarkup,addMargin};
