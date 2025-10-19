/**
 * Contract Address Configuration
 * 
 * UPDATE THIS FILE WHEN LAUNCHING:
 * Simply paste your contract address in the CONTRACT_ADDRESS constant below
 * and it will automatically update everywhere in the app
 */

// 🚨 UPDATE THIS WITH YOUR CONTRACT ADDRESS BEFORE LAUNCH 🚨
export const CONTRACT_ADDRESS = 'HdiyGfMmWk3tSXKAkKcY8oxoCXxABNjfbhxfiJA8pump'

// Derived configurations - DO NOT MODIFY THESE
export const PUMP_FUN_URL = CONTRACT_ADDRESS 
  ? `https://pump.fun/coin/${CONTRACT_ADDRESS}`
  : '#'

export const IS_SOON = !CONTRACT_ADDRESS

