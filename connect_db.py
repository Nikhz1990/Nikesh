import psycopg2

try:
    conn = psycopg2.connect(
        host="localhost",
        database="ai_ml_db",
        user="postgres",
        password="Root",   # change this
        port="5432"
    )

    print("✅ Connected to PostgreSQL!")

    cursor = conn.cursor()

    cursor.execute("SELECT * FROM users;")
    rows = cursor.fetchall()

    print("📊 Users Data:")
    for row in rows:
        print(row)

    cursor.close()
    conn.close()

except Exception as e:
    print("❌ Error:", e)