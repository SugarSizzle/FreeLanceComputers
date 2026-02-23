import rateLimit from 'express-rate-limit'

/**
 * Rate limiter for login attempts.
 * 
 * Allows 5 login attempts per IP address within a 15-minute window.
 * After 5 failed/successful attempts, the client must wait for the
 * window to expire before trying again.
 * 
 * The `standardHeaders: true` option sends RateLimit-* headers so the
 * client (or frontend) can know how many attempts remain.
 */
export const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,   // 15 minutes
    limit: 5,                    // max 5 attempts per window
    standardHeaders: true,       // sends RateLimit-Limit, RateLimit-Remaining, RateLimit-Reset headers
    legacyHeaders: false,        // disables the older X-RateLimit-* headers (not needed)

    message: { 
        error: 'Too many login attempts. Please try again in 15 minutes.' 
    },

    // Only count requests that result in a 401 (failed login) toward the limit.
    // Successful logins (status 200) won't eat into the user's attempts.
    skipSuccessfulRequests: true,
})
