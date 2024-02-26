-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "photo" TEXT,
    "desc" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
