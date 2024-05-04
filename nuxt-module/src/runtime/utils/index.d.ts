// Generated by dts-bundle-generator v9.5.1

/**
 * Smoothly scrolls to the element with the specified ID without scuffing up your URLs.
 */
export declare function scrollToAnchor(id: string): Promise<void>;
/**
 * Toggles the body scroll with specified class names and returns a promise
 */
export declare function toggleBodyScroll(className?: string): Promise<void>;
/**
 * Toggles the element scroll with specified class names and returns a promise
 */
export declare function toggleElementScroll(element: HTMLElement): Promise<void>;
/**
 * Copies a convereted string to the clipboard
 */
export declare function copyToClipboard(value: string | number): Promise<void>;
/**
 * Toggles the fullscreen mode
 */
export declare function toggleFullScreen(): Promise<void>;
/**
 * Toggles through dark, light and system color modes
 */
/**
 * Resets a form to its initial state
 */
export declare function resetForm(form: HTMLFormElement): Promise<void>;
/**
 * Focuses on and scrolls to the first invalid input, select, or textarea element within a form.
 */
export declare function focusOnInvalid(container: HTMLElement): Promise<void>;
/**
 * Focuses on the nth element within the specified form, where 0 is the first element and -1 is the last element.
 */
export declare function focusOnNth(container: HTMLElement, index?: number): Promise<void>;
/**
 *  Sets up a keyboard trap within an HTML element, allowing the focus to cycle between the first and last focusable elements when the Tab key is pressed.
 */
export declare function focusTrap(container: HTMLElement): void;
/**
 * Format numbers into neat and formatted strings for people
 */
export declare function formatNumber(number: number, options?: {
	decimals?: number;
	locale?: string;
}): string;
/**
 * Format numbers into local currency with extra smarts
 */
export declare function formatCurrency(number: number, options?: {
	decimals?: number;
	locale?: string;
}): string;
/**
 * Format numbers into valuations displayed in thousands, millions or billions
 */
export declare function formatValuation(number: number, options?: {
	decimals?: number;
	locale?: string;
}): string;
/**
 * Format a number into a percentage
 */
export declare function formatPercentage(value: number, options?: {
	decimals?: number;
	locale?: string;
}): string;
/**
 * Format time into a human-readable string
 */
export declare function formatDurationLabels(seconds: number, options?: {
	labels?: "short" | "long";
	round?: boolean;
}): string;
/**
 * Format time into duration 00:00:00
 */
export declare function formatDurationNumbers(seconds: number): string;
/**
 * Format numbers into words
 */
export declare function formatNumberToWords(value: number): string;
/**
 * Generate initials from any string while ignoring common titles
 */
export declare function formatInitials(text: string, options?: {
	length?: number;
}): string;
/**
 * Format Unix timestamp into a datetime string
 */
export declare function formatUnixTime(timestamp: number): string;
/**
 * Create a string of comma-separated values from an array, object or string with an optional limit and conjunction
 */
export declare function formatList(items: string | object | any[], options?: {
	limit?: number;
	conjunction?: string;
}): string;
/**
 * Converts a string to title case following the Chicago Manual of Style rules.
 * @reference https://www.chicagomanualofstyle.org/book/ed17/frontmatter/toc.html

 */
export declare function formatTitle(text: string): string;
/**
 * Format a sentence case string
 */
export declare function formatSentenceCase(text: string): string;
/**
 * Adds a space between the last two words in a string to prevent lonely words.
 */
export declare function formatTextWrap(value: string): string;
/**
 * Adds a prefix to a string if it doesn't already start with the prefix.
 */
export declare function startWith(value: string, start: string): string;
/**
 * Removes a prefix from a string if it starts with the prefix.
 */
export declare function startWithout(value: string, start: string): string;
/**
 * Adds a suffix to a string if it doesn't already end with the suffix.
 */
export declare function endWith(text: string, end: string): string;
/**
 * Removes a suffix from a string if it ends with the suffix.
 */
export declare function endWithout(text: string, end: string): string;
/**
 * Adds a prefix and suffix to a string if it doesn't already start and end with them.
 */
export declare function surroundWith(text: string, start: string, end: string): string;
/**
 * Adds plurals to a string except for excluded words.
 */
export declare function pluralize(value: string, count: number): string;
/**
 * Removes plurals from a string.
 */
export declare function singularize(value: string): string;
/**
 * Converts a number to a string with ordinal suffix.
 */
export declare function ordinalize(value: number): string;
/**
 * Strip HTML tags from a string.
 */
export declare function stripHtml(text: string): string;
/**
 * Strips whitespace from a string.
 */
export declare function stripWhitespace(text: string): string;
/**
 * Strips numbers from a string.
 */
export declare function stripNumbers(text: string): string;
/**
 * Strips punctuation from a string.
 */
export declare function stripPunctuation(text: string): string;
/**
 * Strips symbols from a string.
 */
export declare function stripSymbols(text: string): string;
/**
 * Strips emojis from a string (requires ES6 Unicode support) 🦊.
 */
export declare function stripEmojis(text: string): string;
/**
 * Converts a string to-a-slug.
 */
export declare function slugify(text: string): string;
/**
 * Converts a slug to a string.
 */
export declare function deslugify(text: string): string;
/**
 * Removes spaces and capitalizes the first letter of each word except for the first word.
 */
export declare function camelCase(text: string): string;
/**
 * Removes spaces and capitalizes the first letter of each word.
 */
export declare function pascalCase(text: string): string;
/**
 * Replaces spaces with underscores and converts to lowercase.
 */
export declare function snakeCase(text: string): string;
/**
 * Replaces spaces with hyphens and converts to lowercase.
 */
export declare function kebabCase(text: string): string;
/**
 * Converts to title case by capitalizing the first letter of each word.
 */
export declare function titleCase(text: string): string;
/**
 * Escape HTML entities in a string.
 */
export declare function escapeHtml(text: string): string;
/**
 * Unescape HTML entities in a string.
 */
export declare function unescapeHtml(text: string): string;
/**
 * Detect the current scroll position of the window
 */
export declare function detectScrollPosition(): {
	x: number;
	y: number;
};
/**
 * Detect the absolute mouse position with the page
 */
export declare function detectMousePosition(event: MouseEvent): {
	x: number;
	y: number;
};
/**
 * Detect the relative mouse position with the window size
 */
export declare function detectRelativeMousePosition(event: MouseEvent): {
	x: number;
	y: number;
};
/**
 * Detect the browser's window size
 */
export declare function detectWindowSize(): {
	width: number;
	height: number;
};
/**
 * Detect the screen or monitor size
 */
export declare function detectScreenSize(): {
	width: number;
	height: number;
};
/**
 * Detect the current device type (Mobile or Desktop)
 */
export declare function detectDevice(): string;
/**
 * Detect the current operating system
 */
export declare function detectOS(): string;
/**
 * Detect if the browser window is currently active or hidden.
 */
export declare function detectActiveBrowser(): boolean;
/**
 * Detect the current color scheme (Light or Dark)
 */
export declare function detectColorScheme(): string;
/**
 * Detect the current user's Timezone
 */
export declare function detectUserTimezone(): string;
/**
 * Detect the currect device orientation
 */
export declare function detectDeviceOrientation(): string;
/**
 * Detect the container size via ID
 */
/**
 * Detect the current breakpoint based on Tailwind CSS breakpoints
 */
export declare function detectBreakpoint(): string;
/**
 * Detect any container breakpoint based on Tailwind CSS breakpoints
 */
export declare function detectContainerBreakpoint(element: HTMLElement): string;
/**
 * Detect the current network status of the user (Online or Offline)
 */
export declare function detectNetworkStatus(): string;
/**
 * Returns the current URL
 */
export declare function detectUrl(): string;
/**
 * Returns the path of the current URL in an array
 */
export declare function detectUrlPath(): string[];
/**
 * Returns a value from the URL by name
 */
export declare function detectUrlParams(): {
	[key: string]: string;
}[] | null;
/**
 * Returns a value from the URL hash by name
 */
export declare function detectUrlHash(): string | null;
/**
 * Returns the current host or domain name from the URL
 */
export declare function detectHost(): string;
/**
 * Returns the current hostname from the URL
 */
export declare function detectHostName(): string;
/**
 * Returns the current port
 */
export declare function detectPort(): string;
/**
 * Generate a random number
 */
export declare function generateNumber(length: number): number;
/**
 * Generate a random number between two values
 */
export declare function generateNumberBetween(min: number, max: number): number;
/**
 * Generate a universally unique identifier (UUID).
 */
export declare function generateUuid(): string;
/**
 * Generate a unique short ID based on the current timestamp
 */
export declare function generateShortId(length?: number): string;
/**
 * Generate a random, secure password with a mix of character types.
 */
export declare function generatePassword(length?: number): string;
/**
 * Generate Lorem Ipsum text in various formats.
 */
export declare function generateLoremIpsum(count?: number, format?: string): string;
/**
 * Calculates the sum of an array of numbers.
 */
export declare function sum(numbers: number[]): number;
/**
 * Calculates the mean of an array of numbers.
 */
export declare function mean(numbers: number[]): number;
/**
 * Calculates the mean of an array of numbers.
 */
export declare function average(numbers: number[]): number;
/**
 * Calculates the margin based on a percentage.
 */
export declare function margin(value: number, percentage: number): number;
/**
 * Adds the margin to the value.
 */
export declare function addMargin(value: number, percentage: number): number;
/**
 * Subtracts the margin from the value.
 */
export declare function subtractMargin(value: number, percentage: number): number;
/**
 * Calculates the markup based on a percentage.
 */
export declare function subtractMarkup(value: number, percentage: number): number;
/**
 * Adds the markup to the value.
 */
export declare function addMarkup(value: number, percentage: number): number;
/**
 * Calculates the median of an array of numbers.
 */
export declare function median(numbers: number[]): number;
/**
 * Calculates the mode of an array of numbers.
 */
export declare function mode(numbers: number[]): number | null;
/**
 * Finds the minimum value in an array of numbers.
 */
export declare function min(numbers: number[]): number;
/**
 * Finds the maximum value in an array of numbers.
 */
export declare function max(numbers: number[]): number;
/**
 * Returns the minimum and maximum values in an array of numbers.
 */
export declare function minMax(numbers: number[]): [
	number,
	number
];
/**
 * Returns the difference between two values, expressed as a positive number.
 */
export declare function range(numbers: number[]): number;
/**
 * Returns the standard deviation of an array of numbers.
 */
export declare function standardDeviation(numbers: number[]): number;
/**
 * Returns the measure of asymmetry of the probability distribution of an array of numbers.
 * The skewness value can be positive, zero, negative, or undefined.
 */
export declare function skewness(numbers: number[]): number | undefined;
/**
 * Shuffles your data in a random order.
 */
export declare function dataShuffle(items: object | any[]): any;
/**
 * Reverse an array.
 */
export declare function dataReverse(items: object | any[]): any;
/**
 * Sort an array or object by a property.
 */
export declare function dataSortBy(items: object | any[], options?: {
	property?: string;
	order?: "asc" | "desc";
}): any;
/**
 * Returns single unique values within an array or object
 */
export declare function dataRemoveDuplicates(...arrays: any[][]): any[];
/**
 * Flatten an array of arrays or an object of objects into a single array or object. That was hard to say.
 */
export declare function dataFlatten(items: object | any[]): object | any[];
/**
 * Returns an array without a property or properties.
 */
export declare function dataWithout(items: object | any[], properties: any | any[]): any;
/**
 * Check if any given value is a valid email address.
 */
export declare function isEmail(value: any): boolean;
/**
 * Check if any given value is a valid number.
 */
export declare function isNumber(value: any): boolean;
/**
 * Check if any given value is a valid URL.
 */
export declare function isUrl(value: any): boolean;
/**
 * Check if any given string, array or object is empty.
 */
export declare function isEmpty(value: any): boolean;
/**
 * Check if any given value is a valid UUID.
 */
export declare function isUuid(value: any): boolean;
/**
 * Check if any given value is a valid JSON string.
 */
export declare function isJson(value: any): boolean;
/**
 * Check if any given value is an object.
 */
export declare function isObject(value: any): boolean;
/**
 * Check if any given value is an array.
 */
export declare function isArray(value: any): boolean;
/**
 * Check if any given value is a valid hexadecimal color code.
 */
export declare function isHex(value: any): boolean;
/**
 * Check if any given value contains only alphabetic characters.
 */
export declare function isAlphabetic(value: any): boolean;
/**
 * Check if any given value contains only alphanumeric characters.
 */
export declare function isAlphanumeric(value: any): boolean;
/**
 * Check if any given value is a boolean value.
 */
export declare function isBoolean(value: any): boolean;
/**
 * Check if any given value is undefined.
 */
export declare function isUndefined(value: any): boolean;
/**
 * Check if any given value is null.
 */
export declare function isNull(value: any): boolean;
/**
 * Check if any given value is a valid Date object.
 */
export declare function isDate(value: any): boolean;
/**
 * Check if any given value is a valid time in HH:mm format.
 */
export declare function isTime(value: any): boolean;
/**
 * Check if any given value year is a leap year.
 */
export declare function isLeapYear(value: number): boolean;
/**
 * Check if the number is even.
 */
export declare function isEven(value: number): boolean;
/**
 * Check if the number is odd.
 */
export declare function isOdd(value: number): boolean;
/**
 * Check if the number is positive.
 */
export declare function isPositive(value: number): boolean;
/**
 * Check if the number is negative.
 */
export declare function isNegative(value: number): boolean;
/**
 * Check if the number is zero.
 */
export declare function isZero(value: number): boolean;
/**
 * Check if the number is over 9000.
 */
export declare function isOver9000(value: number): boolean;
/**
 * Check if the number is a prime number.
 */
export declare function isPrime(value: number): boolean;
/**
 * Check if the number is an integer.
 */
export declare function isInteger(value: any): boolean;
/**
 * Check if the number is a float.
 */
export declare function isFloat(value: any): boolean;
/**
 * Check if the number is between the specified range.
 */
export declare function isBetween(value: number, min: number, max: number): boolean;
/**
 * Check if the number is divisible by the specified number.
 */
export declare function isDivisibleBy(value: number, divisor: number): boolean;
/**
 * Check if any given value is a valid credit card number.
 */
export declare function isCreditCard(value: any): boolean;
/**
 * Check if any given value is a valid latitude-longitude coordinate in the format lat,lng or lat,lng.
 */
export declare function isLatLng(value: any): boolean;
/**
 * Check if any given value is a valid latitude coordinate.
 */
export declare function isLatitude(value: any): boolean;
/**
 * Check if any given value is a valid longitude coordinate.
 */
export declare function isLongitude(value: any): boolean;
/**
 * Check if any given value is a valid IP address.
 */
export declare function isIpAddress(value: any): boolean;
/**
 * Check if any given value is a valid port number.
 */
export declare function isPort(value: number): boolean;
/**
 * Check if any given value is a valid MAC address.
 */
export declare function isMacAddress(value: any): boolean;
/**
 * Wraps each word, sentence or paragraph in a string with a tag.
 */
export declare function splitByWords(text: string): string;
/**
 * Check the strength of a password against a given policy.
 */
export declare function checkPasswordStrength(value: string, length: number, uppercase: number, numbers: number, special: number): object;
/**
 * Returns the reading time of a string in Hours, Minutes, and Seconds.
 */
export declare function readingTime(text: string, wordsPerMinute?: number): string;
/**
 * Replaces placeholders in a string with values from an object.
 */
export declare function mergeFields(text: string, fields: {
	[key: string | number]: string | number;
}, brackets?: string): string;

export {};
