import 'dotenv/config'
import mongoose from "mongoose"


async function main() {
    const MONGODB_URI = process.env.MONGODB_URI

    if (!MONGODB_URI) {
        console.error('ERROR: MONGODB_URI must be set in .env')
        process.exit(1)
    }

    try {
        const startedAt = Date.now()
        await mongoose.connect(MONGODB_URI, { bufferCommands: false })
        const elapsed = Date.now() - startedAt

        const dbName = mongoose.connection?.name || "(unknown)"
        const host = mongoose.connection?.host || "(unknown)"

        console.log(`OK: Connected to MongoDB [db="${dbName}", host="${host}", time="${elapsed}"]`)
        await mongoose.connection.close()
        process.exit(0)
    } catch (error) {
        console.error("ERROR: Database connection failed")
        console.error(error)
        try { await mongoose.connection.close() } catch {}
        process.exit(1)
    }
}

main()