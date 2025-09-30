-- CreateTable
CREATE TABLE "Subsciber" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Subsciber_email_key" ON "Subsciber"("email");
