Add-Type -AssemblyName System.Drawing

$sourcePath = "e:\Abhiram\next-20251115T150845Z-1-001\next\public\assets\img\products"
$files = Get-ChildItem "$sourcePath\*.jpg"

foreach($file in $files) {
    Write-Host "Processing: $($file.Name)"
    
    $img = [System.Drawing.Image]::FromFile($file.FullName)
    
    # Resize to 800px width
    $newWidth = 800
    $newHeight = [int]($img.Height * $newWidth / $img.Width)
    
    $newImg = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
    $graphics = [System.Drawing.Graphics]::FromImage($newImg)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
    
    # Save with quality 85
    $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object {$_.MimeType -eq 'image/jpeg'}
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 85)
    
    $newImg.Save($file.FullName, $encoder, $encoderParams)
    
    $graphics.Dispose()
    $newImg.Dispose()
    $img.Dispose()
    
    Write-Host "Compressed: $($file.Name)"
}

Write-Host "All images compressed successfully!"
