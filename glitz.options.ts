import { Options, compose } from '@glitz/core'
import { createDevToolTransformer } from '@glitz/devtool-transformer'
import { createNumberToLengthTransformer } from '@glitz/length-transformer'
import prefixer from '@glitz/prefixer-transformer'

export const glitzOptions: Options = {
  transformer: compose(
    // Adds vendor prefixes to relevant props
    prefixer,
    // Shows runtime warnings about CSS errors in console
    createDevToolTransformer(),
    // Adds units to naked numbers
    createNumberToLengthTransformer()
  ),
}
