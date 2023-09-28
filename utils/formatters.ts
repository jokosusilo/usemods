/**
 * Format numbers into local currency
 * @example formatCurrency(1234.56)
 * @returns $1,234.56
 */
export function formatCurrency(number: number, currency = 'USD'): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  })
  try {
    return formatter.format(number)
  } catch (error) {
    console.error(error)
    return ''
  }
}

/**
 * Format time into hours, minutes, and seconds
 * @example formatTime(3723)
 * @returns 1hr 2min 3s
 */
export function formatTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600)
  const mins = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  let formattedTime = ''
  if (hrs > 0) {
    formattedTime += `${hrs}hr `
  }
  if (mins > 0) {
    formattedTime += `${mins}min `
  }
  if (s > 0) {
    formattedTime += `${s}s `
  }
  return formattedTime.trim()
}

/**
 * Format Phone Number
 */

// TODO: Make more robust
// export function formatPhoneNumber(number: string, country: string = 'US'): string {
//   const patterns: { [key: string]: RegExp } = {
//     US: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
//     UK: /^(\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?)?\(?0?(?:\)[\s-]?)?([1-9]\d{1,4}\)?[\d\s-]+)((?:x|ext\.?\s?|\#)\d{3,4})?$/,
//     CA: /^(\+?1[-.\s]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
//     BR: /^(\+?55[-.\s]?)?\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/,
//     AU: /^(\+?61[-.\s]?)?\(?(0?[2-57-8])\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,
//     DE: /^(\+?49[-.\s]?)?\(?([0-9]{2,3})\)?[-. ]?([0-9]{3,4})[-. ]?([0-9]{4})$/,
//     FR: /^(\+?33[-.\s]?)?\(?([0-9]{1,5})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/,
//     IN: /^(\+?91|0)?[6789]\d{9}$/,
//     NZ: /^(\+?64|0)[28]\d{7,9}$/,
//     ZA: /^(\+?27|0)\d{9}$/,
//     ZM: /^(\+?26)?09[567]\d{7}$/,
//     ES: /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
//     SE: /^(\+?46|0)[\s-]?7[\s-]?[02369]([\s-]?\d){7}$/,
//     CH: /^(\+?41|0)(\d{2})?[\s-]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})$/,
//     TW: /^(\+?886-?|0)?9\d{8}$/,
//     CZ: /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
//     BE: /^(\+?32|0)4?\d{8}$/,
//     PT: /^(\+351)?9[1236]\d{7}$/,
//     GR: /^(\+?30)?(69\d{8})$/,
//     HU: /^(\+?36)(20|30|70)\d{7}$/,
//     IL: /^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}$/,
//     IT: /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
//     AR: /^(\+?549|0)(11|[2368]\d)\d{8}$/,
//     MX: /^(\+?52)?(1|01)?\d{10,11}$/,
//     PK: /^(\+?92|0)?[3456789]?\d{9}$/,
//     JP: /^(\+?81|0)\d{1,4}[ -]?\d{1,4}[ -]?\d{4}$/
//   }

//   if (!patterns[country]) {
//     throw new Error(`Unsupported country code: ${country}`)
//   }

//   let replacementPattern: string
//   const captureGroupsCount = (patterns[country].toString().match(/\(\?/g) || []).length
//   switch (captureGroupsCount) {
//     case 2:
//       replacementPattern = '$1-$2'
//       break
//     case 3:
//       replacementPattern = '$1-$2-$3'
//       break

//     default:
//       replacementPattern = number
//       break
//   }

//   return number.replace(patterns[country], replacementPattern)
// }