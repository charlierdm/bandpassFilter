## Specifications

<strong>
Our company creates digital Audio plugins.

Electronic music producers apply our filters to change how their tracks sound.

Create a bandpass filter.

The bandpass filter will take 3 inputs.

#### 1st input

- Music track - an array of frequencies.
- Each frequency is represented by an integer.
- Must never be an emtpy array or contain null.

#### 2nd input

- lower limit of the bandpass filter represented by a single integer.

#### 3rd input

- upper limit of the bandpass filter represented by a single integer.
  </strong>

## Input / Output examples

| Input                       | Output                                                                     |
| --------------------------- | -------------------------------------------------------------------------- |
| [20] 30, 40                 | [30]                                                                       |
| [10, 50] 20, 60             | [20, 50]                                                                   |
| [100, 200, 100] 150, 180    | [150, 180, 150]                                                            |
| [20, 30, 40, 50, 60] 25, 45 | [25, 30, 40, 45, 45]                                                       |
| [400, 900, 600] 500, 700    | [500, 700, 600]                                                            |
| [1000, 500, 1200] 400, 1100 | [1000, 500, 1100]                                                          |
| <strong>Edge Cases</strong> |                                                                            |
| []                          | throw error - "input track is empty"                                       |
| [null]                      | throw error - "input is corrupted"                                         |
| [10] 40, 20                 | throw error - "lower limit must be less than or equal to the upper value." |
